/** Description:
 * Simple server that ensures all requesetd files from the client are properly sent.
 * 
 * Server that handles HTTP requests on port 80.
 * 
 * Its designed to only allow GET requests.
 * 
 * Paths should come with an explicit file format at the end, else the server will assume you want an .html. Examples:
 * 
 * my/path/file.png     - Server will look for my/path/file.png
 * other/path/some      - Server will look for other/path/some.html
 * words/hre/hello/     - Server will look for words/hre/hello.html
 * /                    - Server will look for index.html by default when encountering a path value of "/" alone
 * 
 * The server is set up to work with a root directory:
 * - Make sure you write the root directory relative to where this file is
 * - Make sure you dont end your root directory variable with the "/" symbol
 * - Make sure all your files are relative to that root directory
 * - Make sure your index.html is directly inside that root directory (although you can change index.html by modifying the index constant)
 * 
 * If you have MIME errors with some types, make sure the types you are working with are all properly included inside the get_content_type function.
 * 
 * When running the file, make sure you give write and network permissions (--allow-net --allow-write)
 * 
 */


// constants
const root = "./dist";
const index = "index.html";
const port = 80;
const records =  "./records.log";
const time_offset = -4;


async function get_file(path: string) {

    // create stream to the file (aka open the file)
    const stream = await Deno.open(path);

    // get file stats
    const stat = await stream.stat();

    // set buffer to file size
    const buffer = new Uint8Array(stat.size);

    // read whole file onto buffer
    await stream.read(buffer);

    // close file
    stream.close();

    // return the file data in an unsigned byte array
    return buffer;
}


function get_content_type(format: string | undefined): string {
    
    let contentType = "uknown";
    
    // add here any content-type you need to work with
    switch(format) {

        case "js":
            contentType = "text/javascript"
            break;
        case "html": 
            contentType = "text/html"
            break;
        case "json":
            contentType = "application/json"
            break;
        case "png":
            contentType = "image/png"
            break;
        case "svg":
            contentType = "image/svg+xml"
            break;
        case "jpg":
        case "jpeg":
            contentType = "image/jpeg"
            break;
        case "css":
            contentType = "text/css"
            break;
        case "pdf":
            contentType = "application/pdf"
            break;
        case "md":
            contentType = "text/markdown"
            break;
    }

    return contentType;
}

async function handle_http(req: Request) {

    // get url onto the URL object for easy parsing (also req for match)
    const url = new URL(req.url);

    // if pathname is "/", make it "/index.html"
    url.pathname = url.pathname == "/" ? `/${index}` : url.pathname;

    // add root to path
    url.pathname = `${root}${url.pathname}`;

    // pattern that extracts file format from a path
    const patFileSigned = new URLPattern({
        pathname:"*.:format"
    });

    // we try to match
    const matchFileSigned = patFileSigned.exec(url);

    // get format from match results. If none, set to HTML
    const format = matchFileSigned?.pathname.groups.format || "html";
    
    // if the file is not signed (no format found)
    if(matchFileSigned == null) {
        
        // get rid of any potential "/" at the end of the path
        if(url.pathname[url.pathname.length - 1] == "/") {
            url.pathname = url.pathname.substring(0, url.pathname.length - 2);
        }

        // assign the HTML format to it
        url.pathname = `${url.pathname}.html`;
    }


    // create the header
    const headers = new Headers();
    headers.append("content-type", get_content_type(format));

    // record visit (time and resource requested)
    if(format == "html" || format == "md" || format == "pdf") {
        record_visit(url.toJSON(), format, url.searchParams.get("ref"));
    }

    // try to get the file
    try {
        const file = await get_file(`.${url.pathname}`);

        return new Response(file, {headers:headers});
    }
    catch(error) {

        // if an error happens while trying to get the file, throw a 404
        return new Response("File cannot be found", {status: 404});
    }
}

// This just saves what pages the clients visit
async function record_visit(requested_path: string, format: string, ref: string | null) {

    // I blacklisted some URLs to avoid cluttering the records.log file
    if(!whitelist_Url(requested_path)) return;

    // get the date
    const date = new Date();
    date.setHours(date.getHours() + time_offset);
    const date_year = date.getFullYear();
    const date_month = date.getMonth();
    const date_month_string = parse_month(date_month);
    const date_day = date.getDate();
    const date_hour = date.getHours();
    const date_minute = date.getMinutes();
    const date_seconds = date.getSeconds();

    // date in string form
    const date_str = get_data_str("", "[" + date_year + " " + date_month_string + " " + date_day + ", " + date_hour + ":" + date_minute + ":" + date_seconds + "]", 23);

    // resource format
    const format_str = get_data_str("type", format.toUpperCase(), 9);

    // from where the link comes
    const ref_str = get_data_str("ref", ref?.toUpperCase() || "???", 5);

    // the URL
    const url_str = "URL=" + requested_path;

    // encode record to Uint8Array which is what Deno.writeFile accepts.
    const encoder = new TextEncoder();
    const record_encoded = encoder.encode(date_str + " " + format_str + " " + ref_str + " " + url_str + "\n");

    // record it
    await Deno.writeFile(records, record_encoded, { append: true });
}

function get_data_str(type: string, data: string, space: number): string {

    let str = type+(type.length > 0 ? "=" : "")+data;

    for(let i = str.length; i < space; i++) {
        str = str + " ";
    }

    return str;
}

// returns the string abreviature of a month
function parse_month(date:number): string {
    switch(date) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
    }

    return "unknown (" + date + ")";
}

// choppy whitelist function to reduce cluster in records.log
function whitelist_Url(url: string): boolean {

    // we first sort the links that contain the ref query parameter. Since we use that param in our links, we can allow them all.
    if(url.includes("?ref=") && url.includes("alfredcode.com"))
        return true;

    // filters out requests not using the domain name (most bots)
    if(!url.includes("alfredcode.com"))
        return false;

    // filters out requests that don't consume any of the main content like project descriptions (.md), the CV or a blogpost interaction
    if(!url.includes(".md") && !url.includes("/blogpost/") && !url.includes(".pdf"))
        return false;

    // filters out some markdown files that I send with the index page
    if(url.includes("_desc") || url.includes("greeting"))
        return false;

    return true;
}

Deno.serve({port: port}, handle_http);
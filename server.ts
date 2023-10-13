// simple server that ensures all requesetd files from the client are properly sent.

// defined the root directory where we serve files from.
const root = "./dist";
const index = "index.html";

/* 
async function handle_get(req: Request) {

    const headers = new Headers();
    let contentType = "";

    // get URL (we use the URL object for easy parsing)
    const url = new URL(req.url);

    // pattern we will use to scan the URL for a file format
    const fileExt = new URLPattern({
        pathname: "*.:format"
    });

    // get any matches to our pattern
    const matches = fileExt.exec(url);
    
    if(matches) {

        contentType = get_content_type(matches.pathname.groups.format);
        headers.append("content-type", contentType);
    }
    
    // get path
    const path = (root + (url.pathname == "/" ? index : url.pathname));


    return new Response(await get_file(path), {
        headers: headers
    });
} */


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


Deno.serve({port: 3000}, handle_http);
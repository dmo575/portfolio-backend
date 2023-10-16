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
const port = 3000;


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


Deno.serve({port: port}, handle_http);
async function handler(req: Request) {

    const url = new URL(req.url);
    const path = url.pathname;

    console.log("PATH: " + path);

    // create stream to file
    const stream = await Deno.open(path == "/" ? "image_page.html" : path.substring(1,));

    console.log("STREAM: " + stream);

    // get file stats
    const stat = await stream.stat();

    // set buffer to file size
    const buffer = new Uint8Array(stat.size);

    // read whole file onto buffer
    await stream.read(buffer);

    // close file
    stream.close();

    // send buffer contents (file)
    return new Response(buffer);
}



Deno.serve({port: 8000}, handler);

async function handler(req: Request) {

    //open a file, will be loaded onto a file data stream
    const file = await Deno.open('./hello.html');
    // get info on it
    const stats = await file.stat();

    // if its a file
    if(stats.isFile) {

        // create a buffer so we can read onto it, 16 bytes
        const buffer = new Uint8Array(16);
        // this function will read onto buffer, then return the number of bytes read
        const num = await file.read(buffer);

        // log it
        console.log(`bytes read: ${num} \n data: ${buffer}`);
    }

    // close the file stream
    file.close();

    // yesyes
    return new Response('200OKEOKE');
}

Deno.serve({port: 9000}, handler);
async function hanlder(req: Request) {
    return new Response("Hello");
}

Deno.serve({
    port: 8000,
    hostName: '127.0.0.1'
}, hanlder);

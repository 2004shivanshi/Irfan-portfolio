export async function GET(request: Request) {
    return new Response(JSON.stringify({Hello: 'world'}))
}
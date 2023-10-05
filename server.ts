const BUTTON_ROUTE = new URLPattern({ pathname: "/clicked" });

function handler(req: Request): Response {

  const match = BUTTON_ROUTE.exec(req.url);

  if (match) {
    return new Response("Button was clicked!");
  } else {
    const content = Deno.readFileSync("public/index.html");
    return new Response(content)
  }

  // return new Response("Not found (try /books/1)", {
  //   status: 404,
  // });
}

Deno.serve(handler);
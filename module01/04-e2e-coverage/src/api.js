const http = require("http");
const { once } = require("events");
const DEFAULT_USER = {
  username: "RafaSilveira",
  password: "123",
};

// curl localhost:3000/login -X POST --data '{"username": "RafaSilveira","password":"123"}'
// curl localhost:3000/login -X POST --data '{"username": "someoneElse","password":"123"}'
const routes = {
  "/login:post": async (request, response) => {
    const user = JSON.parse(await once(request, "data"));
    if (
      user.username.toLowerCase() !== DEFAULT_USER.username.toLowerCase() ||
      user.password !== DEFAULT_USER.password
    ) {
      response.writeHead(401);
      return response.end("Login failed!");
    }
    return response.end("logged in");
  },
  "/contact:get": (request, response) => {
    response.write("contact us page");
    return response.end();
  },
  default(request, response) {
    response.writeHead(404);
    return response.end("not found!");
  },
};

function handler(request, response) {
  const { url, method } = request;
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;

  const chosen = routes[routeKey] || routes.default;

  console.log({ routeKey });

  return chosen(request, response);
}

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("running at 3000"));

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Guys</h1>");
});

const port = 3000;
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})
import http from "node:http";
import path from "node:path";

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
    const absPathToResources = path.join(__dirname, 'public', 'index.html');
    const relPathToResources = path.join('public', 'index.html');
    console.log('absolute: ', absPathToResources);
  console.log('relative: ', relPathToResources);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><h1>The server is working</h1></html>");
});

server.listen(PORT, () => console.log("Connected"));

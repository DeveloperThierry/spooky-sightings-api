import http from "node:http";
import path from "node:path";
import { serveStatic } from "./utils/serveStatic.js";
import fs from "node:fs/promises";
import { getContentType } from "./utils/getContentType.js";
import { getData } from "./utils/getData.js";
import { handleGet, handlePost } from "./handlers/routeHandlers.js";
const PORT = 8000;

const __dirname = import.meta.dirname;
console.log(await getData());
const server = http.createServer(async (req, res) => {
  if (req.url === '/sub' && req.method === 'POST'){
    let body = ''
    for (const chunk of req){
      body += chunk
    }
    try{
      const emailObj = JSON.parse(body)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(emailObj))
    }
    catch(e){
      console.log(e)
    }
  }

  if (req.url === "/api") {
    if(req.method === 'GET'){return await handleGet(res);}
    else if (req.method === 'POST'){
      handlePost(req, res)
    }
  } else if (!req.url.startsWith("/api"))
  {await serveStatic(req, res, __dirname);}
});

server.listen(PORT, () => console.log("Connected"));

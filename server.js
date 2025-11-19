import http from "node:http";
import path from "node:path";
import { serveStatic } from "./utils/serveStatic.js";
import fs from "node:fs/promises";
import {getContentType} from './utils/getContentType.js'
import {getData} from './utils/getData.js'

const PORT = 8000;

const __dirname = import.meta.dirname;
console.log(await getData())
const server = http.createServer(async (req, res) => {
  await serveStatic(req, res, __dirname);
});

server.listen(PORT, () => console.log("Connected"));

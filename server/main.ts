import express from "express";
import dotenv from 'dotenv';
import type { Express, Request, Response } from "express";

dotenv.config();
const app: Express = express();
const port = process.env.port || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

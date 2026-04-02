import express, { Express, Request, Response } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { setServers } from "node:dns";
import cors from "cors";
import clientRoutes from "./routes/client/index.route";

dotenv.config();
if (process.env.NODE_ENV !== "production") {
  setServers(["1.1.1.1", "8.8.8.8"]);
}

const app: Express = express();
const port: number | string = process.env.port || 3000;

database.connect();
app.use(cors());

app.set("views", "./views");
app.set("view engine", "pug");

// parse application/json
app.use(bodyParser.json());

clientRoutes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

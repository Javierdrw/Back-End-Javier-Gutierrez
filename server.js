import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./router/index.js";

const server = express();
const PORT = process.env.PORT || 8080;

const ready = () => console.log("server ready in port " + PORT);

server.get("/", (request, response) => {
  response.send("Hola mundo en Express");
});
server.get("/saludo", (request, response) => {
  response.send("Hola bienvenido a mi servidor");
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));

server.use("/api", indexRouter);
server.listen(PORT, ready);

console.log(process.env.PORT);

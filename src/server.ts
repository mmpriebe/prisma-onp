import Express from "express";
import routes from "./routes";


const server = Express();

server.use(Express.json());
server.use(routes);

server.listen('4000');



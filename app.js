//*Dependencias de terceros
require("dotenv").config();

//*Dependencias propias
const Server = require("./models/server");

const server = new Server();
server.listen();

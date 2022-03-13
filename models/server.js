const express = require("express");
const cors = require("cors");
const { json } = require("express/lib/response");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //*Api de user
    this.userPath = "/api/user";

    //*Middlerware
    this.Middlerware();

    //*Rutas
    this.routes();
  }

  Middlerware() {
    //*CORS
    this.app.use(cors());

    //*Lectura y parseo del body
    this.app.use(express.json());
    //*Directorio publco
    this.app.use(express.static("public"));
  }
  routes() {
    //* Todo lo que pasa por /api/user nos dirige al rputer de user
    this.app.use(this.userPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Servidor corriendo en el puerto ${this.port}, http://localhost:${this.port}`
      );
    });
  }
}

module.exports = Server;

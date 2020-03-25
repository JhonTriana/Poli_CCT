"use strict";
const express = require("express");
const app = express();
//objetos necesarios para identificar en el formulario los datos que se deben guardar.
var http = require("http").createServer(webServer),
  form = require("fs").readFileSync("formdep.html"),
  querystring = require("querystring"),
  util = require("util"),
  dataString = "";
/*Funcion que le pide al servidor ingresar dentro del formato de datos y guardar los datos haciendo una comparacion con los metodos GET y POST, en este caso el metodo POST envia al servicio los datos que se deben bajar a la base de datos. */
function webServer(require, Response) {
  if (require.method == "GET") {
    Response.writeHead(200, { "Content-Type": "text/html" });
    Response.end(form);
  }

  if (require.method == "POST") {
    require.on("data", function(data) {
      dataString += data;
    });
    require.on("end", function() {
      var templateString = dataString;
      console.log(templateString);
      Response.end(templateString);
    });
  }
}
//Lamado al servidor
http.listen(3000);

console.log("Servidor Corriendo en http://localhost:3000/");

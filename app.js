
const express = require("express");
var cowsay = require("cowsay")
const app = express();

app.listen(8080, () => {
 console.log("El servidor inicializado en el puerto 8080, realice su petición Get o Post");
});



app.post('/', function (req, res) {
    res.send(cowsay.say({
        text:"Petición Post",
        e: "OO",
        T:"P"
    }));
  });

  app.get('/', function (req, res) {
    res.send(cowsay.say({
        text:"Petición Get",
        e: "OO",
        T:"P"
    }));
  });


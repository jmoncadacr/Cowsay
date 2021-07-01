
const express = require("express");
var cowsay = require("cowsay")
const app = express();

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});



app.post('/', function (req, res) {
    res.send('POST request to the homepage');
    console.log(cowsay.say({
        text:"petición Post",
        e: "OO",
        T:"P"
    }));
  });

  app.get('/', function (req, res) {
    res.send('GET request to the homepage');
    console.log(cowsay.say({
        text:"petición Get",
        e: "OO",
        T:"P"
    }));
  });


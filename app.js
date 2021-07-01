import cowsay from 'cowsay';
import express from 'express';

const app = express();
const puerto = 8080;
const host= 'localhost';

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

  app.listen(puerto, host);

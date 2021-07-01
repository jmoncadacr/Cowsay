# Cowsay

Instrucciones api Cowsay:

1) Clonar el repositorio 
  git remote add origin https://github.com/jmoncadacr/Cowsay.git
 
2) Ejecutar los siguientes comandos en la terminal:<br>
  &nbsp; npm install <br>
  &nbsp; npm install express <br>
  &nbsp; npms install cowsay <br>
3) Iniciar el api con el comando node app.js.
4) Desde Postman realizar las peticiones Get y Post.
<br>
<br>
<br>
Instrucciones Docker:

1)Creamos la imagen de docker ejecutando el siguiente comando en la terminal:<br>
&nbsp; docker build . -t jmoncadacr/cowsay <br>
2)Inicializamos la imagen  ejecutando el siguiente comando en la terminal:<br>
&nbsp; docker run -p 49160:8080 -d  jmoncadacr/cowsay <br>
3) Desde Postman realizar las peticiones Get y Post.
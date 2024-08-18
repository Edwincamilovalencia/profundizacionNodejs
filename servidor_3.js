const http = require('http');

let contadorVisitas = 0;

//creacion servidor 
const server = http.createServer((req, res)=>{
    contadorVisitas++;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`este sitio ha sido visitado ${contadorVisitas}\n`);
});

server.listen(3000,'127.0.0.1',() =>{
    console.log(`servidor corriendo en http://127.0.0.1:3000/`);

});
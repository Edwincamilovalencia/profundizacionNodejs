const http = require('http');

const host ='127.0.0.1';
const port =3000;

//creacion servidor 
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('esto se esta ejecutando actualmente')
    res.end('Bienvenidos a la clase de profundizacion 11111');
});

server.listen(port,host,() =>{
    console.log(`servidor corriendo en http://${host}:${port}/`);

});
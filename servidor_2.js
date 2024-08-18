const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url ==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('materia de profundizacion\n')
        res.end('respuesta final\n');
    } else if (url ==='/sobrenosotros'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('soy edwin camilo valencia\n ')
        res.end('respuesta final\n');
    }  else if (url ==='/contactos'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('3135606342\n ')
        res.end('respuesta final\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write('pagina incorrecta\n ')
        res.end('respuesta final\n');
    }

});

server.listen(3000, '127.0.0.1',() =>{
    console.log(`servidor corriendo en http://127.0.0.1:3000/`);

});

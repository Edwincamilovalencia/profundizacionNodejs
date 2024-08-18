const http = require('http');
const url = require('url');

const sumar = require('./modulos/suma');
const restar = require('./modulos/resta');
const multiplicar = require('./modulos/multiplicacion');
const dividir = require('./modulos/division');

const server = http.createServer((req, res) => {
    const consulta = url.parse(req.url, true).query;
    const operacion = consulta.operacion;
    const a = parseFloat(consulta.a);
    const b = parseFloat(consulta.b);

    let resultado;

    try {
        switch (operacion) {
            case 'sumar':
                resultado = sumar(a, b);
                break;
            case 'restar':
                resultado = restar(a, b);
                break;
            case 'multiplicar':
                resultado = multiplicar(a, b);
                break;
            case 'dividir':
                resultado = dividir(a, b);
                break;
            default:
                throw new Error('Operacion no exite');
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`El resultado de ${operacion} ${a} y ${b} es: ${resultado}\n`);
    } catch (error) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Error: ${error.message}\n`);
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});
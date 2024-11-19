// Importar módulo express

const express = require('express');

// App
const app = express();

// Rota hello world
app.get('/', function(req, res){
    res.write('Hello World!');
    res.end();
});

// Servidor
app.listen(8080);
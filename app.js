// Importar módulo express

const express = require('express');

// importar módulo express-handlebars
const { engine } = require('express-handlebars');

// importar modulo do mysql
const mysql = require('mysql2');

// App
const app = express();

// Configuração do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// configuração de conexão
const conexao = mysql.createConnection({
   host: 'localhost',
   user:'root',
   password: 'ifsp',
   database:'projeto' 
});

// teste de conexão[
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexão efetuada com sucesso!');
});

// Rota principal
app.get('/', function(req, res){
    res.render('formulario');
});

// Servidor
app.listen(8080);
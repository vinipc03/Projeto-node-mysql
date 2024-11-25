// Importar módulo express

const express = require('express');

// importar módulo express-handlebars
const { engine } = require('express-handlebars');

// importar modulo do mysql
const mysql = require('mysql2');

// App
const app = express();

// Adicionar boostrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

// Adicionar CSS
app.use('/css', express.static('./css'));

// Configuração do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Manipulação de dados via rotas
app.use(express.json());
app.use(express.urlencoded({extended:false}));

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

// Rota de cadastro
app.post('/cadastrar', function(req, res){
    console.log(req.body);
    res.end();
})

// Servidor
app.listen(8080);
// instalar mysql2 e executar uma query simples
const express = require('express');
const mysql = require('mysql2');

const app = express();

app.listen(3000, () => {
    console.log('servidor no ar')
})

//criação da conexão com banco de dados 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL0P4TDcQGB2R97Djet7vXYHggatTZE4',
    datebase: 'nodejs_tasks'
})

//conexão com o banco de dados
connection.connect(erro => {
    if (erro) {
        console.log("Erro na conexão ao MySQL" + erro.message)
        return
    }
    console.log("Conexão estabelecida!");

})

//criando uma rota que execute uma query
app.get('/', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, results, fields) => {
        if (err) {
            console.log(err.message);
            res.send('erro ao obter a lista de tarefas')
        } else {
            res.send(results);
        }
    })

})
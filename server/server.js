const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// CONFIGURAÇÃO DO BANCO DE DADOS

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'root', 
    database: 'futebolnet'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

// ROTA 1: BUSCAR TODOS OS DISPOSITIVOS (GET)
app.get('/dispositivos', (req, res) => {
    const sql = "SELECT * FROM dispositivos";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// ROTA 2: CADASTRAR DISPOSITIVO (POST)
app.post('/dispositivos', (req, res) => {
    const sql = "INSERT INTO dispositivos (`nome`, `ip`, `tipo`, `status`) VALUES (?)";
  
    const values = [
        req.body.nome,
        req.body.ip,
        req.body.tipo,
        'online' 
    ];

    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Dispositivo cadastrado com sucesso!");
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
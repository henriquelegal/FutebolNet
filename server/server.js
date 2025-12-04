const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { exec } = require('child_process');


function execPing(ipAddress) {
    return new Promise((resolve) => {
       
        const command = `ping ${ipAddress} -n 1`; 

        exec(command, (error, stdout) => {
            let status = 'offline';
            let latency = null;
            
            if (stdout.includes('Resposta de') || stdout.includes('Reply from')) {
                status = 'online';
               
                const match = stdout.match(/tempo=(\d+)ms|time=(\d+)ms/i);
                if (match) {
                    latency = match[1] || match[2]; 
                }
            }
            
            resolve({ status, latency });
        });
    });
}

const app = express();
app.use(express.json());
app.use(cors());


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


app.get('/devices', (req, res) => {
    const sql = "SELECT * FROM devices ORDER BY name ASC";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});


app.post('/devices', (req, res) => {
    const { name, ip_address, type } = req.body;
    
    if (!name || !ip_address) {
        return res.status(400).json({ error: "Nome e IP são obrigatórios." });
    }

    const sql = "INSERT INTO devices (`name`, `ip_address`, `type`) VALUES (?)";
    const values = [name, ip_address, type];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("ERRO MYSQL NO CADASTRO:", err);
            return res.status(500).json({ error: "Erro ao cadastrar no banco. Verifique o terminal." });
        }
        return res.status(201).json({ message: "Dispositivo cadastrado com sucesso!", id: data.insertId });
    });
});


app.put('/devices/:id', (req, res) => {
    const deviceId = req.params.id;
    const { name, ip_address, type } = req.body;

    const sql = "UPDATE devices SET `name` = ?, `ip_address` = ?, `type` = ? WHERE id = ?";
    const values = [name, ip_address, type, deviceId];

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Dispositivo não encontrado." });
        }
        return res.json({ message: "Dispositivo atualizado com sucesso." });
    });
});


app.delete('/devices/:id', (req, res) => {
    const deviceId = req.params.id;
    const sql = "DELETE FROM devices WHERE id = ?";

    db.query(sql, [deviceId], (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Dispositivo não encontrado." });
        }
        return res.json({ message: "Dispositivo deletado com sucesso." });
    });
});


app.post('/devices/:id/test', async (req, res) => {
    const deviceId = req.params.id;
    
   
    let device;
    try {
        const [rows] = await db.promise().query("SELECT ip_address FROM devices WHERE id = ?", [deviceId]);
        if (rows.length === 0) {
            return res.status(404).json({ error: "Dispositivo não encontrado." });
        }
        device = rows[0];
    } catch (dbErr) {
        console.error("Erro ao buscar dispositivo:", dbErr);
        return res.status(500).json({ error: "Erro interno do servidor." });
    }

   
    let pingResult;
    try {
        pingResult = await execPing(device.ip_address);
        
        const { status, latency } = pingResult; 
        
      
        const sqlLog = "INSERT INTO tests (device_id, status, latency) VALUES (?, ?, ?)";
        const logValues = [deviceId, status, latency];

        await db.promise().query(sqlLog, logValues);

        return res.json({ 
            message: "Teste realizado e log salvo.", 
            status: status, 
            latency: latency
        });

    } catch (pingErr) {
        console.error("Erro ao realizar o ping:", pingErr);
        const sqlLogFail = "INSERT INTO tests (device_id, status, latency) VALUES (?, 'offline', NULL)";
        await db.promise().query(sqlLogFail, [deviceId]);

        return res.status(500).json({ error: "Falha ao realizar o ping.", status: 'offline' });
    }
});



app.get('/devices/:id/tests', (req, res) => {
    const deviceId = req.params.id;
    const sql = "SELECT * FROM tests WHERE device_id = ? ORDER BY timestamp DESC";
    
    db.query(sql, [deviceId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
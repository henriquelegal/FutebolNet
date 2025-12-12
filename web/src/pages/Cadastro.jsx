import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
   
    const [name, setName] = useState('');
    const [ip_address, setIpAddress] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();

    const salvar = async () => {
        if (!name || !ip_address) {
            alert("Nome e IP são obrigatórios!");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/devices', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, ip_address, type })
            });

            if (!response.ok) {
              
                const errorData = await response.json();
                throw new Error(errorData.error || 'Falha ao cadastrar dispositivo');
            }

            alert("Dispositivo cadastrado com sucesso!");
            navigate('/'); 
        } catch (error) {
            console.error("Erro:", error);
            alert(`Erro ao salvar: ${error.message}`);
        }
    };

    return (
        <div className="container">
            <h2>Cadastrar Dispositivo</h2>
            {}

            <label htmlFor="name">Nome</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="ip_address">IP</label>
            <input type="text" id="ip_address" value={ip_address} onChange={(e) => setIpAddress(e.target.value)} />

            <label htmlFor="type">Tipo</label>
            <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} />

            <button onClick={salvar}>Salvar</button>
        </div>
    );
}

export default Cadastro;
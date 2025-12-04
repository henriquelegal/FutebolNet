import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Cadastro() {
  const [nome, setNome] = useState("");
  const [ip, setIp] = useState("");
  const [tipo, setTipo] = useState("");
  const navigate = useNavigate();

  function salvar() {
    if(!nome || !ip) {
        alert("Preencha nome e IP!");
        return;
    }

  
    fetch('http://localhost:3000/dispositivos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, ip, tipo })
    })
    .then(response => {
        alert("Dispositivo cadastrado!");
        navigate("/"); // Volta para a tela inicial
    })
    .catch(err => console.error("Erro:", err));
  }

  return (
    <div className="container">
      <h2 className="page-title">Cadastrar Dispositivo</h2>

      <div className="form-group">
        <label>Nome</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Ex: Câmera 1" />
      </div>

      <div className="form-group">
        <label>IP</label>
        <input value={ip} onChange={(e) => setIp(e.target.value)} placeholder="Ex: 192.168.0.10" />
      </div>

      <div className="form-group">
        <label>Tipo</label>
        <input value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder="Ex: Câmera, PC..." />
      </div>

      <button className="btn" onClick={salvar}>Salvar</button>
    </div>
  );
}

export default Cadastro;
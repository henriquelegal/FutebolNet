import { useState } from "react";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [ip, setIp] = useState("");
  const [tipo, setTipo] = useState("");

  function salvar() {
    alert("Dispositivo cadastrado!");
  }

  return (
    <div className="container">
      <h2 className="page-title">Cadastrar Dispositivo</h2>

      <div className="form-group">
        <label>Nome</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>

      <div className="form-group">
        <label>IP</label>
        <input value={ip} onChange={(e) => setIp(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Tipo</label>
        <input value={tipo} onChange={(e) => setTipo(e.target.value)} />
      </div>

      <button className="btn" onClick={salvar}>Salvar</button>
    </div>
  );
}

export default Cadastro;

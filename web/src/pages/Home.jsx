import { useState, useEffect } from "react";
import DeviceCard from "../components/DeviceCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [devices, setDevices] = useState([]);
  const navigate = useNavigate();

 
  const fetchDevices = () => {
  
    fetch('http://localhost:3000/devices')
      .then(res => res.json())
      .then(data => setDevices(data))
      .catch(err => console.error("Erro ao buscar dados:", err));
  };

  
  useEffect(() => {
    fetchDevices();
  }, []);
  

  const handleDeleteDevice = (id) => {
    fetch(`http://localhost:3000/devices/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) { throw new Error('Falha ao excluir dispositivo'); }
        alert("Dispositivo excluído com sucesso!");
        fetchDevices(); 
    })
    .catch(err => console.error("Erro ao deletar:", err));
  };

 
  const handleTestDevice = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/devices/${id}/test`, {
            method: 'POST',
        });
        const result = await response.json();
        
        alert(`Teste finalizado! Status: ${result.status.toUpperCase()}. Latência: ${result.latency || 'N/A'}ms`);
        
        fetchDevices();
    } catch (error) {
        console.error("Erro no teste de ping:", error);
        alert("Erro ao executar o teste. Verifique o console ou o IP.");
        fetchDevices(); 
    }
  };

  return (
    <div className="container">
      <h2 className="page-title">Dispositivos Monitorados</h2>

      <button className="btn" onClick={() => navigate("/cadastro")}>
        + Cadastrar
      </button>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
        {devices.length === 0 ? <p>Nenhum dispositivo encontrado. Cadastre um!</p> : null}
        
        {devices.map((d) => (
          <DeviceCard 
            key={d.id} 
            device={d} 
            onDelete={handleDeleteDevice} 
            onTest={handleTestDevice}   
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
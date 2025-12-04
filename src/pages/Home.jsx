import { useState, useEffect } from "react";
import DeviceCard from "../components/DeviceCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [devices, setDevices] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch('http://localhost:3000/dispositivos')
      .then(res => res.json())
      .then(data => setDevices(data))
      .catch(err => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <div className="container">
      <h2 className="page-title">Dispositivos Monitorados</h2>

      <button className="btn" onClick={() => navigate("/cadastro")}>
        + Cadastrar
      </button>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
        {devices.length === 0 ? <p>Nenhum dispositivo encontrado.</p> : null}
        
        {devices.map((d) => (
          <DeviceCard key={d.id} device={d} />
        ))}
      </div>
    </div>
  );
}

export default Home;
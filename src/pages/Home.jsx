import { useState } from "react";
import DeviceCard from "../components/DeviceCard";

function Home() {
  const [devices] = useState([
    { id: 1, nome: "Câmera Campo 1", ip: "192.168.0.10", status: "online" },
    { id: 2, nome: "Computador Sala Técnica", ip: "192.168.0.20", status: "offline" },
  ]);

  return (
    <div className="container">
      <h2 className="page-title">Dispositivos Monitorados</h2>

      <button className="btn" onClick={() => (window.location.href = "/cadastro")}>
        + Cadastrar
      </button>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
        {devices.map((d) => (
          <DeviceCard key={d.id} device={d} />
        ))}
      </div>
    </div>
  );
}

export default Home;

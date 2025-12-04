import "./Dashboard.css";

export default function Dashboard() {
  
  const devices = [
    { id: 1, name: "Câmera Campo 1", ip: "192.168.1.10", status: "online", latency: 23 },
    { id: 2, name: "Tablet Comissão", ip: "192.168.1.45", status: "offline", latency: null },
    { id: 3, name: "Computador Análise", ip: "192.168.1.20", status: "online", latency: 12 },
  ];

  return (
    <div className="dashboard-container">
      <h1>FutebolNet Monitor</h1>

      <div className="top-bar">
        <button className="btn-primary">Cadastrar Dispositivo</button>
      </div>

      <div className="device-list">
        {devices.map((d) => (
          <div key={d.id} className="device-card">
            <h3>{d.name}</h3>
            <p><strong>IP:</strong> {d.ip}</p>

            <p className={`status ${d.status}`}>
              {d.status === "online" ? "🟢 Online" : "🔴 Offline"}
            </p>

            {d.latency !== null && (
              <p><strong>Latência:</strong> {d.latency}ms</p>
            )}

            <div className="card-buttons">
              <button className="btn-secondary">Testar Ping</button>
              <button className="btn-tertiary">Ver Histórico</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

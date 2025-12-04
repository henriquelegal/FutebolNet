import { useState } from "react";



function DeviceCard({ device, onDelete, onTest, onShowHistory }) { 
    const [isTesting, setIsLoading] = useState(false);

    const handleDelete = () => {
        if (window.confirm(`Tem certeza que deseja excluir o dispositivo ${device.name}?`)) {
            onDelete(device.id);
        }
    };

    const handleTest = async () => {
        setIsLoading(true);
        await onTest(device.id); 
        setIsLoading(false);
    };

    
    const getStatusDisplay = () => {
        if (isTesting) {
            return "⏳ Testando...";
        }
        
      
        const statusClass = device.status === "online" ? "status-online" : "status-offline";
        const statusText = device.status === "online" ? "Online" : "Offline";
        
        return (
            <span className={statusClass}>
                {statusText}
                {device.latency ? ` (${device.latency}ms)` : ''}
            </span>
        );
    };

    return (
        <div className="device-card">
          {}
          <h3>{device.name}</h3>
          <p>IP: {device.ip_address}</p> 

          {getStatusDisplay()}

          <div className="card-buttons" style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
            {}
            <button 
                className="btn" 
                style={{ background: isTesting ? '#4d4d4d' : '#0077ff' }}
                onClick={handleTest}
                disabled={isTesting}
            >
                {isTesting ? "Testando..." : "Testar Agora"}
            </button> 
            
            {}
            <button 
                className="btn-tertiary" 
                style={{ background: '#e0e0e0', color: '#333' }}
            >
                Ver Histórico
            </button>
            
            {}
            <button 
                className="btn-tertiary" 
                style={{ background: '#dc3545', color: 'white' }}
                onClick={handleDelete}
            >
                Excluir
            </button>
          </div>
        </div>
    );
}

export default DeviceCard;
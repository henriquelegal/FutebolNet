function DeviceCard({ device }) {
  return (
    <div className="device-card">
      <h3>{device.nome}</h3>
      <p>IP: {device.ip}</p>

      <span
        className={device.status === "online" ? "status-online" : "status-offline"}
      >
        {device.status}
      </span>
    </div>
  );
}

export default DeviceCard;

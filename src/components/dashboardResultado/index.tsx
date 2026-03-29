import type { DadosSimulacao } from "../../App";
import './style.css'

type PropsDashboard = {
  dados: DadosSimulacao | null;
};

export function DashboardResultado({ dados }: PropsDashboard) {
  if (!dados) return null;

  if (dados.erro) {
    return <p>{dados.erro}</p>;
  }

  return (
    <div className="container-resultado card">
      <p><strong>Risco:</strong> <span className="resultado-risco">{dados.risco}</span></p>
      <p><strong>Atraso:</strong> <span>{dados.atraso}</span></p>
      <p><strong>Backlog:</strong> <span>{dados.backlog}</span></p>
      <p><strong>Pedidos:</strong> <span>{dados.pedidos}</span></p>
      <p><strong>Capacidade:</strong> <span>{dados.capacidade}</span></p>
      <p><strong>Acúmulo:</strong> <span>{dados.acumulo}</span></p>
      <p><strong>Período:</strong> <span>{dados.tempo}</span> dias</p>
    </div>
  );
}
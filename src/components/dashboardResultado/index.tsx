import type { DadosSimulacao } from "../../App";
import './style.css'
import CardResultado from "../CardResultado";
import { formatarAtraso } from "../../utils/logistica/formatadores/formatarAtraso";
import CardRecomendacao from "../CardRecomendacao";

type PropsDashboard = {
  dados: DadosSimulacao | null;
};

export function DashboardResultado({ dados }: PropsDashboard) {
  if (!dados) return null; 

  const resumoOperacao = [
    { tipo: "Risco", valor: dados.risco },
    { tipo: "Atraso estimado", valor: formatarAtraso({ atraso: dados.atraso }) },
    { tipo: "Backlog", valor: dados.backlog },
    { tipo: "Acúmulo diário", valor: dados.acumulo },
  ];

  const metricas = [
    { tipo: "Demandas/dia", valor: dados.pedidos },
    { tipo: "Capacidade/dia", valor: dados.capacidade },
    { tipo: "Período (dias)", valor: dados.tempo },
  ];

  return (
    <div className="container-geral">

      <section className="container-secao">
        <div className="secao-header">Resumo da Operação</div>

        <div className="container-cards">
          {resumoOperacao.map((item) => (
            <CardResultado
              key={item.tipo}
              tipo={item.tipo}
              resultado={String(item.valor)}
            />
          ))}

          <CardRecomendacao risco={dados.risco} />
        </div>
      </section>

      <section className="container-secao">
        <div className="secao-header">Métricas</div>

        <div className="container-cards">
          {metricas.map((item) => (
            <CardResultado
              key={item.tipo}
              tipo={item.tipo}
              resultado={String(item.valor)}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
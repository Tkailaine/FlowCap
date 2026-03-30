import type { DadosSimulacao } from "../../App";
import './style.css'
import CardResultado from "../CardResultado";
import {formatarAtraso} from "../../utils/logistica/formatadores/formatarAtraso.ts"

type PropsDashboard = {
  dados: DadosSimulacao | null;
};


export function DashboardResultado({ dados }: PropsDashboard) {
  if (!dados) return null;

  if (dados.erro) {
    return <p>{dados.erro}</p>;
  }


  const listaResultados= [
    { tipo: "Risco", valor: dados.risco },
    { tipo: "Atraso", valor: formatarAtraso({atraso:dados.atraso})  },
    { tipo: "Backlog", valor: dados.backlog },
    { tipo: "Pedidos", valor: dados.pedidos },
    { tipo: "Capacidade", valor: dados.capacidade },
    { tipo: "Acúmulo", valor: dados.acumulo},
    { tipo: "Período", valor: dados.tempo },
  ];



  return (
    <div className="container-resultado">
        
   {listaResultados.map((item, index) => (
    <CardResultado 
        key={index}
        tipo={item.tipo}
        resultado={String(item.valor)}
    />
   )) }
    </div>
  );
}
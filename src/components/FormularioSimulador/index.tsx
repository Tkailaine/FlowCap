import calculoAtraso from "../../utils/logisticaCalculadora/calculoAtraso";
import calculoBacklog from "../../utils/logisticaCalculadora/calculoBacklog";
import calculoRisco from "../../utils/logisticaCalculadora/calculoRisco";
import { recomendacaoEstrategia } from "../../utils/logisticaCalculadora/recomendacao";
import "./style.css";
import { useState } from "react";
export function FormularioSimulador() {
  const [pedidos, setPedidos] = useState(0);
  const [capacidade, setCapacidade] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [resultado, setResultado] = useState("");
  const [recomendacao, setRecomendacao] = useState("")

  const processarCalculo = (e) => {
    e.preventDefault();
    const backlog = calculoBacklog({
      pedidos: pedidos,
      capacidade: capacidade,
      dias: tempo,
    });
    const atraso = calculoAtraso({ backlog: backlog, capacidade: capacidade });
    const risco = calculoRisco({ backlog: backlog, capacidade: capacidade });
    const acumulo = Math.max(pedidos - capacidade, 0);

    if (capacidade === 0) {
      const mensagem = `Capacidade Inválida, Digite um valor maior que 0.`;
      setResultado(mensagem);
    } else if (pedidos < 0) {
      const mensagem = `Pedidos Inválido, Digite um valor maior que 0.`;
      setResultado(mensagem);
    } else {
      const mensagem = `
        Com ${pedidos} pedidos/dia e capacidade de ${capacidade}, haverá acúmulo de ${acumulo} pedidos por dia. Em ${tempo} ${
        tempo === 1 ? "dia" : "dias"
      }, o backlog será de ${backlog} pedidos. Isso representa um atraso médio de aproximadamente ${atraso}. Risco: ${risco}.
        `;
      setResultado(mensagem);

      setRecomendacao(recomendacaoEstrategia({risco:risco}))
    }
  };

  return (
    <>
      <form className="container-formulario">
        <input
          type="number"
          placeholder="Pedidos por dia"
          onChange={(e) => setPedidos(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Capacidade por dia"
          onChange={(e) => setCapacidade(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Tempo de operação"
          onChange={(e) => setTempo(Number(e.target.value))}
        />
        <button onClick={processarCalculo} type="button">
          Calcular
        </button>
      </form>

      <p>{resultado}</p>
      <p>RECOMENDAÇÃO {recomendacao}</p>
    </>
  );
}

export default FormularioSimulador;

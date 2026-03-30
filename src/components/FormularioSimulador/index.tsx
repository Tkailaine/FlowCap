import { useState } from "react";
import calculoAtraso from "../../utils/logistica/calculos/calculoAtraso";
import calculoBacklog from "../../utils/logistica/calculos/calculoBacklog";
import calculoRisco from "../../utils/logistica/calculos/calculoRisco";
import validarEntradas from "../../utils/logistica/validadores/validarEntradas";
import type { DadosSimulacao } from "../../App.tsx";
import './style.css'

type PropsFormulario = {
  setDados: React.Dispatch<React.SetStateAction<DadosSimulacao | null>>;
};

export function FormularioSimulador({ setDados }: PropsFormulario) {
  const [pedidos, setPedidos] = useState(0);
  const [capacidade, setCapacidade] = useState(0);
  const [tempo, setTempo] = useState(0);

  const processarCalculo = () => {
    const erro = validarEntradas({ pedidos, capacidade });

    if (erro) {
      setDados({
        pedidos: 0,
        capacidade: 0,
        tempo: 0,
        backlog: 0,
        atraso: 0,
        risco: "",
        acumulo: 0,
        erro,
      });
      return;
    }

    const backlog = calculoBacklog({ pedidos, capacidade, dias: tempo });
    const atraso = calculoAtraso({ backlog, capacidade });
    const risco = calculoRisco({ backlog, capacidade });
    const acumulo = Math.max(pedidos - capacidade, 0);

    setDados({
      pedidos,
      capacidade,
      tempo,
      backlog,
      atraso,
      risco,
      acumulo,
    });
  };

  return (
    <form className="formulario">
      <h1>Simulador de Capacidade Operacional</h1>
      <div className="campo">
        <label htmlFor="pedidos">Demanda</label>
        <input
          id="pedidos"
          type="number"
          placeholder="Pedidos por dia"
          onChange={(e) => setPedidos(Number(e.target.value))}
        />
      </div>

      <div className="campo">
        <label htmlFor="capacidade">Capacidade</label>
        <input
          id="capacidade"
          type="number"
          placeholder="Capacidade por dia"
          onChange={(e) => setCapacidade(Number(e.target.value))}
        />
      </div>

      <div className="campo">
        <label htmlFor="tempo">Tempo</label>
        <input
          id="tempo"
          type="number"
          placeholder="Tempo de operação"
          onChange={(e) => setTempo(Number(e.target.value))}
        />
      </div>

      <button type="button" onClick={processarCalculo}>
        Calcular
      </button>

    </form>
  );
}

export default FormularioSimulador;
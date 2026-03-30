import { useState } from "react";
import calculoAtraso from "../../utils/logistica/calculos/calculoAtraso";
import calculoBacklog from "../../utils/logistica/calculos/calculoBacklog";
import calculoRisco from "../../utils/logistica/calculos/calculoRisco";
import validarEntradas from "../../utils/logistica/validadores/validarEntradas";
import type { DadosSimulacao } from "../../App";
import './style.css'

type PropsFormulario = {
  setDados: React.Dispatch<React.SetStateAction<DadosSimulacao | null>>;
};

export function FormularioSimulador({ setDados }: PropsFormulario) {
  const [pedidos, setPedidos] = useState(0);
  const [capacidade, setCapacidade] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [erro, setErro] = useState<string | null>(null);

  const processarCalculo = () => {
    const erroValidacao = validarEntradas({ pedidos, capacidade });

    if (erroValidacao) {
      setErro(erroValidacao);
      return;
    }

    setErro(null);

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
        <label htmlFor="pedidos">Demandas por dia</label>
        <input
          id="pedidos"
          type="number"
          placeholder="Ex: 50 pedidos"
          onChange={(e) => setPedidos(Number(e.target.value))}
        />
      </div>

      <div className="campo">
        <label htmlFor="capacidade">Capacidade por dia</label>
        <input
          id="capacidade"
          type="number"
          placeholder="Ex: 40 atendimentos"
          onChange={(e) => setCapacidade(Number(e.target.value))}
        />
      </div>

      <div className="campo">
        <label htmlFor="tempo">Período da simulação (dias)</label>
        <small>Por quantos dias você quer simular?</small>
        <input
          id="tempo"
          type="number"
          placeholder="Ex: 7 dias"
          onChange={(e) => setTempo(Number(e.target.value))}
        />
      </div>

   
      {erro && <p className="erro">{erro}</p>}

      <div className="exemplo">
        Exemplo: 50 pedidos/dia com capacidade de 40 gera acúmulo de backlog.
      </div>

      <button type="button" onClick={processarCalculo}>
        Simular operação
      </button>
    </form>
  );
}

export default FormularioSimulador;
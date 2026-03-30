import './style.css'
import recomendacaoEstrategia from '../../utils/logistica/recomendacoes/gerarRecomendacao'

type Props = {
  risco: string;
};

function CardRecomendacao({ risco }: Props) {
  const rec = recomendacaoEstrategia({ risco });

  return (
    <div className={`card-recomendacao ${risco.toLowerCase()}`}>
      <h3>Recomendação:</h3>
      <p>{rec.texto}</p>
    </div>
  );
}

export default CardRecomendacao;
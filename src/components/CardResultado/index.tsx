import './style.css'

type propsCardResultado = {
    tipo: string,
    resultado: string;
}
export function CardResultado({ tipo, resultado }: propsCardResultado) {
  let classe = "resultado";

  if (resultado === "Alto") {
    classe = "resultado-risco vermelho";
  } else if (resultado === "Médio") {
    classe = "resultado-risco amarelo";
  } else if (resultado === "Baixo") {
    classe = "resultado-risco verde";
  }

  return (
    <div className="card-resultado card">
      <p><strong>{tipo}:</strong></p>
      <span className={classe}>{resultado}</span>
    </div>
  );
}




export default CardResultado
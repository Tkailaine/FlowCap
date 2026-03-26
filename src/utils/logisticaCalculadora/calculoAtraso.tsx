import formatarAtraso from "./formatarAtraso";
interface propsCalculoAtraso {
  backlog: number;
  capacidade: number;
}

export function calculoAtraso({ backlog, capacidade }: propsCalculoAtraso) {
  let atraso = 0;
  atraso = (backlog / capacidade)
  const atrasoFormatado = formatarAtraso({atraso: atraso});
  return atrasoFormatado;
}

export default calculoAtraso;

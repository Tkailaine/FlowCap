type propsAtraso = {
    atraso: number
}
export function formatarAtraso({atraso}:propsAtraso) {
    if (atraso < 1) {
      const horas = Math.round(atraso * 24);
      return `${horas} horas`;
    }

    const dias = Math.floor(atraso);
    const horas = Math.round((atraso - dias) * 24);

    if (horas === 0) {
      return `${dias} ${dias === 1 ? "dia" : "dias"}`;
    }

    return `${dias} ${dias === 1 ? "dia" : "dias"} e ${horas} horas`;
  }

  export default formatarAtraso;
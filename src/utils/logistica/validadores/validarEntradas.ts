type propsValidarEntradas = {
    pedidos: number,
    capacidade: number
}
export function validarEntradas({pedidos, capacidade}:propsValidarEntradas) {
  if (capacidade === 0) return "Capacidade inválida"
  if (pedidos < 0) return "Pedidos inválidos"
  return null
}

export default validarEntradas
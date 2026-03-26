type propsRecomendacaoEstrategia = {
    risco: string
}
export const recomendacaoEstrategia = ({risco}:propsRecomendacaoEstrategia) => {
   if(risco === 'Baixo'){
    return 'Nenhuma ação necessária'
   }else if(risco === 'Médio'){
    return 'Monitorar a operação e considerar ajustes na capacidade para evitar aumento do atraso.'
   }else{
    return 'Aumentar capacidade operacional imediatamente ou redistribuir pedidos para evitar crescimento do backlog.'
   }
}
type propsRecomendacaoEstrategia = {
    risco: string
}

type Recomendacao = {
  texto: string;
};

export const recomendacaoEstrategia = ({ risco }: propsRecomendacaoEstrategia): Recomendacao => {
  if (risco === 'Baixo') {
    return { texto: 'Nenhuma ação necessária' };
  } else if (risco === 'Médio') {
    return { texto: 'Monitorar a operação e considerar ajustes na capacidade.' };
  } else {
    return { texto: 'Aumentar capacidade ou redistribuir pedidos.' };
  }
};

export default recomendacaoEstrategia
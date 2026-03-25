interface propsCalculoAtraso{
    backlog: number;
    capacidade: number;
}

export function calculoAtraso({backlog, capacidade}:propsCalculoAtraso){
    let atraso = 0;
    atraso = backlog/capacidade;
    return(atraso)
}

export default calculoAtraso;
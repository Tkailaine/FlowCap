type propsRisco = {
    backlog: number,
    capacidade: number
}

export const calculoRisco = ({backlog, capacidade}:propsRisco) =>{
    if(backlog <= 0){
        return('Baixo')
    }else if(backlog > 0 && backlog <= capacidade){
        return('Médio')
    }else{
        return('Alto')
    }
}

export default calculoRisco;
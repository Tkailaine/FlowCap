 interface prospsBacklog{
    pedidos: number,
    capacidade: number,
    dias: number
 }

 //Calcula o backlog 
 export const calculoBacklog = ({pedidos, capacidade, dias}:prospsBacklog) => {
        let backlog = 0
        
        for(let i = 0; i < dias ; i++){
        backlog = (backlog + pedidos) - capacidade
        
        if(backlog <= 0){
            backlog = 0;
        }}
     return(backlog)
    }

export default calculoBacklog;
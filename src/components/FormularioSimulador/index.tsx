import './style.css'
export function FormularioSimulador(){
    return(
        <form className="container-formulario">
            <input type="number" placeholder="Pedidos por dia" />
            <input type="number" placeholder="Capacidade por dia" />
            <input type="number" placeholder="Tempo de operação" />
        </form>
    )
}

export default FormularioSimulador;
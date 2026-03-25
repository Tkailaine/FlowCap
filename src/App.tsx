
import './App.css'
import FormularioSimulador from './components/FormularioSimulador/index.js'
import calculoAtraso from './utils/logisticaCalculadora/calculoAtraso.js'
import { calculoBacklog } from './utils/logisticaCalculadora/calculoBacklog.js'
import calculoRisco from './utils/logisticaCalculadora/calculoRisco.js'

function App() {
   const backlog = calculoBacklog({pedidos: 500, capacidade: 300, dias: 3})
    console.log(calculoAtraso({backlog, capacidade:300}))
    console.log(calculoRisco({backlog:backlog, capacidade:300}))
 return(
  <FormularioSimulador/>
 )
}

export default App

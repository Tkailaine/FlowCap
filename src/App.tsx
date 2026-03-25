
import './App.css'
import FormularioSimulador from './components/FormularioSimulador/index.js'
import { calculoBacklog } from './utils/logisticaCalculadora/calculoBacklog.js'

function App() {
    console.log(calculoBacklog({pedidos: 100, capacidade: 300, dias: 3}))
 return(
  <FormularioSimulador/>
 )
}

export default App

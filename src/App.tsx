
import { useState } from 'react'
import './App.css'
import FormularioSimulador from './components/FormularioSimulador/index.js'
import { DashboardResultado } from './components/dashboardResultado/index.js'

export type DadosSimulacao = {
  pedidos: number
  capacidade: number
  tempo: number
  backlog: number
  atraso: string
  risco: string
  acumulo: number
  erro?: string
}

function App() {
const [dados, setDados] = useState<DadosSimulacao | null>(null)

 return(
    <main>
      <div className="container-dashboard">
        <FormularioSimulador setDados={setDados}/>
        <DashboardResultado dados={dados} />
      </div>
  </main>
 )
}

export default App

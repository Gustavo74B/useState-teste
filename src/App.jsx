import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)
  const [situacao, setSituacao] = useState(false)

  function aumentar() {
    setNumero((valorAnterior) => valorAnterior + 100)
  }

  function mostrar() {
    setSituacao((situacaoAnterior) => !situacaoAnterior)
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold">useState</h1>
      <p>Número: {numero}</p> 

      <button className="mb-20" onClick={aumentar}>Aumentar</button>

      <div>
        <p className="font-bold text-8xl">{situacao ? 'BOO' : ''}</p>
        <button onClick={mostrar}>Clique para {situacao ? 'ficar tranquilo' : 'tomar susto'}</button>
      </div>
    </div>
  )
}

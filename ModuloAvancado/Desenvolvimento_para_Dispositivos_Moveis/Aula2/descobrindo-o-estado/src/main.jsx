import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Contador(){
  const [quantidade , setQuantidade] = useState(0);

  return(
    <div>
      <h1>Contar cliques</h1>
      <p>Cliques : {quantidade}</p>
      <button onClick={ () => setQuantidade(quantidade + 1)}>+</button>
      <button onClick={() => setQuantidade(quantidade - 1)}>-</button>
    </div>
  );
}

function Interruptor(){
  const [ligado , setLigado] = useState(false);

  return(
    <div>
      <h1>A lâmpada está ligada : {ligado ? "💡 LIGADA" : "🌑 DESLIGADA"}</h1>

      <button onClick={ () => setLigado(!ligado)}>
        Clique para {ligado ? "Desligar": "Ligar"}
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Interruptor />
    <Contador />
  </StrictMode>,
)

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function LigaDesliga(){
  const [ligado, setLigado] = useState(false);
  const [contador, setContador] = useState(0); 

  return (
    <div style={{ 
      textAlign: 'center', 
      fontFamily: 'sans-serif', 
      backgroundColor: ligado ? "#fff3cd" : "#222", 
      color: ligado ? "#222" : "#fff",             
      minHeight: '100vh',                           
      paddingTop: '100px'                           
    }}>
      
      <h1>Prática básica: ON/OFF</h1>
      <p>A luz foi clicada: {contador} vezes</p>
      
      <button onClick={() => { 
        setLigado(!ligado); 
        setContador(contador + 1); 
      }}>
        {ligado ? 'OFF (Apagar)' : 'ON (Acender)'}
      </button>

    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LigaDesliga />
  </StrictMode>,
)

import { StrictMode , useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Gerenciar() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  function adicionarAoPedido() {
    if (novoItem.trim() === "") return;
    setItens([...itens, novoItem]);
    setNovoItem("");
  }

  function removerDoPedido(indexParaRemover) {
    const listaFiltrada = itens.filter((_, index) => index !== indexParaRemover);
    setItens(listaFiltrada);
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>📋 Pedido Atual</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Ex: Pão de Queijo"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={adicionarAoPedido} style={{ padding: '8px 15px' }}>
          Adicionar
        </button>
      </div>

      <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
        {itens.map((produto, index) => (
          <li key={index} style={{ 
            display: 'flex', 
            justifyContent: 'between', 
            alignItems: 'center',
            marginBottom: '8px', 
            fontSize: '18px',
            backgroundColor: '#f4f4f4',
            padding: '8px',
            borderRadius: '4px'
          }}>
            <span style={{ flex: 1 }}>{produto}</span>
            <button 
              onClick={() => removerDoPedido(index)} 
              style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer' }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gerenciar />
  </StrictMode>,
)

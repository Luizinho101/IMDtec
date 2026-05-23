import { StrictMode , useState} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function List() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [listaprodutos, setListaprodutos] = useState([]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Lista de Produtos</h1>
      
      <div style={{ margin: '20px 0' }}>
        <input
          value={nomeProduto}
          onChange={e => setNomeProduto(e.target.value)}
          placeholder="Digite um produto"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button 
          onClick={() => {
            if (nomeProduto.trim() === '') return;
            setListaprodutos([...listaprodutos, nomeProduto]);
            setNomeProduto('');
          }}
          style={{ padding: '8px 15px', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {listaprodutos.map((listanome, index) => (
          <li 
            key={index} 
            style={{ 
              margin: '10px auto', 
              padding: '8px', 
              backgroundColor: '#eee', 
              maxWidth: '280px', 
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'between',
              alignItems: 'center'
            }}
          >
  
            <span style={{ flex: 1, textAlign: 'left', paddingLeft: '10px' }}>
              {listanome}
            </span>
            
            <button 
              onClick={() => setListaprodutos(listaprodutos.filter((_, i) => i !== index))}
              style={{ 
                padding: '4px 8px', 
                cursor: 'pointer', 
                backgroundColor: '#ff4d4d', 
                color: 'white', 
                border: 'none', 
                borderRadius: '3px' 
              }}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>,
)

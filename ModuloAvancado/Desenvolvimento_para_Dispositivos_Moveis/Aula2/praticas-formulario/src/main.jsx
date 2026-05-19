import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useState } from 'react'

function Formulario(){
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [categoria, setCategoria] = useState("Paes");
  const [armazenamento, setArmzenamento] = useState("prateleira");
  

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Cadastro de Produto</h2>

      <label style={{ display: 'block', marginBottom: '8px' }}>
        <input 
          type="radio" 
          value="prateleira"
          checked={armazenamento === "prateleira"}
          onChange={(e) => setArmzenamento(e.target.value)}
        />
        Prateleira (Temperatura Ambiente)
      </label>

      
      <label style={{ display: 'block', marginBottom: '8px' }}>
        <input 
          type="radio" 
          value="geladeira"
          checked={armazenamento === "geladeira"}
          onChange={(e) => setArmzenamento(e.target.value)}
        />
        Geladeira (Resfriado)
      </label>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Nome do Produto:</label>
        <input 
          type="text" 
          placeholder="Ex: Pão de Forma"
          onChange={(e) => setNome(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>



      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Preço (R$):</label>
        <input 
          type="number" 
          step="0.01" 
          placeholder="0.00"
          onChange={(e) => setPreco(Number(e.target.value))}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>



      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Categoria:</label>
        <select 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        >
          <option value="Paes">Pães / Padaria</option>
          <option value="Laticinios">Laticínios</option>
          <option value="Bebidas">Bebidas</option>
        </select>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', borderLeft: '5px solid #007bff' }}>
        <h3>Visualização do Produto:</h3>
        <p><strong>Nome:</strong> {nome || "Não informado"}</p>
        <p><strong>Preço:</strong> R$ {preco.toFixed(2)}</p>
        <p><strong>Categoria:</strong> {categoria}</p>
        <p>Local selecionado: <strong>{armazenamento}</strong></p>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario />
    <Formulario />
  </StrictMode>,
)

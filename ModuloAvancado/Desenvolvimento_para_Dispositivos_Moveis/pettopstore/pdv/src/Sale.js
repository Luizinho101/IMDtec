import './Sale.css'; // Css de estilização
import { useState, useEffect } from 'react'; // React Hooks
import AddClient from './AddClient'; // Componente de adicionar clientes

function Sale(props) {
  //** variáveis de estado **
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedClientID, setSelectedClientID] = useState('');
  const [selectedProductID, setSelectedProductID] = useState('');
  const [insertProductIDs, setInsertProductIDs] = useState([]);
  const [addClient, setAddClient] = useState(false);

  // função que "limpa" o formulário
  function clearForm() {
    setSelectedClientID('');
    setSelectedProductID('');
    setInsertProductIDs([]);
  }

  // função que carrega da API a lista de clientes e guarda em "clients"
  function loadClients() {
    return fetch('http://localhost:3000/api/clients', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.employee.token}`
      }
    }).then((res) => {
      if (res.ok) {
        res.json().then(json => {
          // Extrai o array de clientes de forma segura
          const clientData = json.clients || json.rows || json;
          setClients(Array.isArray(clientData) ? clientData : []);
        });
      }
    });
  }

  // função que carrega a lista de produtos da API
  function loadProducts() {
    fetch('http://localhost:3000/api/products/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.employee.token}`
      }
    }).then(res => {
      if (res.ok) {
        res.json().then(json => {
          // Extrai o array de produtos de forma segura
          const productData = json.products || json.rows || json;
          setProducts(Array.isArray(productData) ? productData : []);
        });
      }
    });
  }

  // Função executada quando um cliente é criado no componente AddClient
  function clientCreated(clientID) {
    loadClients().then(() => {
      setSelectedClientID(clientID);
      setAddClient(false);
    });
  }

  // Função executada se o usuário cancelar a criação de cliente
  function cancelCreateClient() {
    setAddClient(false);
  }

  // Effect Hook que carrega os clientes e produtos na inicialização
  useEffect(() => {
    loadClients();
    loadProducts();
  }, [addClient]);

  // Caso a variável addClient seja true, exibe a tela de cadastro
  if (addClient) {
    return <AddClient employee={props.employee} clientCreated={clientCreated} cancelCreateClient={cancelCreateClient} />
  }

  // Caso contrário, renderiza a interface do PDV tradicional
  return (
    <div className="Sale">
      <h1>PetTopStore - PDV</h1>
      
      <div className="UserBox">
        <div>
          Logado como: <strong>{props.employee.name}</strong>
        </div>
        <button className="logoutButton" onClick={e => props.setEmployee(null)}>
          Sair do sistema
        </button>
      </div>

      <h2>Nova venda</h2>
      <div>
        <label style={{ display: 'block', marginTop: '10px' }}>Selecione um cliente</label>
        <select value={selectedClientID} onChange={(e) => setSelectedClientID(e.target.value)}>
          <option value="">Escolha um cliente</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>{client.name}</option>
          ))}
        </select>
        
        <button className="success" style={{ marginLeft: '10px' }} onClick={() => setAddClient(true)}>
          Cadastrar um novo cliente
        </button>

        <h3>Inserir item na venda</h3>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Selecione um produto</label>
          <select value={selectedProductID} onChange={(e) => setSelectedProductID(e.target.value)}>
            <option value="">Escolha um produto</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
          
          <button className="success" style={{ marginLeft: '10px' }} onClick={() => {
            if (selectedProductID) {
              setInsertProductIDs([...insertProductIDs, selectedProductID]);
              setSelectedProductID('');
            }
          }}>
            [+] Inserir
          </button>
        </div>

        <br/>
        <h4>Produtos inseridos</h4>
        <ul>
          {insertProductIDs.map((productID, index) => {
            const product = products.find(p => p.id === parseInt(productID));
            return <li key={index}>{product ? product.name : `Produto #${productID}`}</li>;
          })}
        </ul>

        <button className="success" onClick={() => {
          if (selectedClientID === '') {
            alert('Selecione um cliente');
            return;
          }
          if (insertProductIDs.length === 0) {
            alert('Adicione pelo menos um produto');
            return;
          }

          // Dispara os dados para salvar a venda na API
          fetch('http://localhost:3000/api/sales', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${props.employee.token}`
            },
            body: JSON.stringify({
              client_id: selectedClientID,
              productIDs: insertProductIDs.map(id => parseInt(id))
            })
          }).then(res => {
            if (res.ok) {
              res.json().then(json => {
                alert('Venda realizada com sucesso!');
                clearForm();
              });
            } else {
              alert('Erro ao realizar venda');
            }
          }).catch(err => {
            alert('Erro de conexão ao finalizar venda');
          });
        }}>
          Finalizar vendas
        </button>
      </div>
    </div>
  );
}

export default Sale;
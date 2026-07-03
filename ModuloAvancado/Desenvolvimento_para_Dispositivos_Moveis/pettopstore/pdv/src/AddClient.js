import { useState } from 'react';

function AddClient(props) {
  //** variáveis de estado **
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // função que salva novo cliente na API
  function salvarCliente() {
    fetch('http://localhost:3000/api/auth/client/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.employee.token}`
      },
      body: JSON.stringify({ name, email, password })
    }).then(res => {
      if (res.ok) {
        alert('cliente saved com sucesso');
        res.json().then(json => {
          // Passa o ID retornado pela API (ajustado para aceitar tanto clienteID quanto id)
          const clientID = json.clienteID || json.id;
          props.clientCreated(clientID);
        });
      } else {
        alert('falha ao salvar cliente');
        props.cancelCreateClient();
      }
    }).catch(err => {
      alert('Erro de conexão ao salvar cliente');
      props.cancelCreateClient();
    });
  }

  return (
    <div style={{ padding: '20px', color: 'cadetblue', fontFamily: 'sans-serif' }}>
      <h2>Novo cliente</h2>
      <div>
        Nome: <input name="name" value={name} onInput={e => setName(e.target.value)}/><br/>
        E-Mail: <input name="email" value={email} onInput={e => setEmail(e.target.value)}/><br/>
        Senha: <input name="password" type="password" value={password} onInput={e => setPassword(e.target.value)}/><br/>
        
        <button className="success" onClick={salvarCliente} style={{ marginRight: '10px' }}>
          Salvar cliente
        </button>
        <button onClick={props.cancelCreateClient}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default AddClient;
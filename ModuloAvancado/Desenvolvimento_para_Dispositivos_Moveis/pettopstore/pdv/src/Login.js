import './Login.css';
import { useState } from "react";

function Login(props) {
  // Variáveis de estado para armazenar o que o usuário digita
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função executada ao clicar no botão Entrar
  function do_login() {
    fetch('http://localhost:3000/api/auth/employee/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then((res) => {
      if (res.ok) {
        // Caso o login tenha sucesso, lê o JSON de resposta
        res.json().then(json => {
          // Passa o funcionário retornado para o componente pai (App.js)
          props.setEmployee(json.employee);
        })        
      } else {
        // Em caso de credenciais erradas
        alert('E-mail ou senha inválidos');
      }
    })
    .catch((err) => {
      alert('Não foi possível conectar à API. Certifique-se de que o servidor Admin está rodando na porta 3000!');
    });
  }

  return (
    <div className="Login">
      <h1>PetTopStore</h1>
      <h2>PDV - Autenticação</h2>
      <div className="LoginBox">
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onInput={e => setEmail(e.target.value)}
          placeholder="Ex: operador@email.com"
        />
        
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={password}
          onInput={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        
        <button onClick={do_login}>
          Entrar no Caixa
        </button>
      </div>
    </div>
  );
}

export default Login;
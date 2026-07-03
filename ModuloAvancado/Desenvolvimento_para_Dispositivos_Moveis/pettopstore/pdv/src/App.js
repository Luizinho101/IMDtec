import './App.css';
import Sale from './Sale';
import Login from './Login';
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';

// Função auxiliar que valida se o token JWT expira em menos de 1 hora
function isTokenOld(jwt_token) {
  try {
    const payload = JSON.parse(Buffer.from(jwt_token.split(".")[1], 'base64').toString('binary'));
    const expiration = new Date(payload.exp * 1000);
    const now = new Date();
    const oneHour = 1000 * 60 * 60;

    if (expiration.getTime() - now.getTime() < oneHour) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return true; // Se der erro na leitura do token, assume que é velho por segurança
  }
}

function App() {
  // Inicializa o estado buscando o operador guardado no navegador
  const [employee, setEmployee] = useState(() => {
    const saved = localStorage.getItem("employee");
    const employeeJSON = JSON.parse(saved);

    if (employeeJSON) {
      if (isTokenOld(employeeJSON.token)) {
        return ''; // Token velho faz o sistema iniciar deslogado
      }
    }
    return employeeJSON;
  });

  // Toda vez que o estado do funcionário mudar, atualiza o LocalStorage
  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employee));
  }, [employee]);

  // Roteamento condicional (SPA)
  if (employee) {
    return <Sale employee={employee} setEmployee={setEmployee} />
  } else {
    return <Login employee={employee} setEmployee={setEmployee} />
  }
}

export default App;
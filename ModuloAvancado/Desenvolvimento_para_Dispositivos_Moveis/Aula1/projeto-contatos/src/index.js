import React from 'react';
import ReactDOM from 'react-dom/client';

function Pessoa(props) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      <p><strong>Nome:</strong> {props.nome} {props.sobrenome}</p>
      <p><strong>CPF:</strong> {props.cpf}</p>
      <p><strong>Contato:</strong> {props.telefone}</p>
      <p><strong>Email:</strong> {props.email}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Lista de Contatos</h1>
      <Pessoa nome="Luiz" sobrenome="Silva" cpf="111.122.402-84" telefone="(84) 99889-4723" email="luiz@email.com" />
      <Pessoa nome="Ana" sobrenome="Oliveira" cpf="222.333.444-55" telefone="(84) 98888-7777" email="ana@email.com" />
      <Pessoa nome="João" sobrenome="Santos" cpf="333.444.555-66" telefone="(84) 97777-6666" email="joao@email.com" />
      <Pessoa nome="Maria" sobrenome="Costa" cpf="444.555.666-77" telefone="(84) 96666-5555" email="maria@email.com" />
      <Pessoa nome="Ricardo" sobrenome="Melo" cpf="555.666.777-88" telefone="(84) 95555-4444" email="ricardo@email.com" />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);


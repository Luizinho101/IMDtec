import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Acedemia(props){
  let status = ""

  if(props.statusMensalidade == true){
    status = "Mensalidade paga"
  }else{
    status = "Mensalidade não paga"
  }

    return ( <>
      <p>Nome do aluno : {props.nome}</p>
      <p>Idade : {props.idade}</p>
      <p>Plano atual : {props.planoAtual}</p>
      <p> Status da mensalidade : {status} </p>
    </>
    );
}

function Titulo(){

  return(
    <header>
      <h1>Academia</h1>
      <p>corpo em forma</p>
    </header>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo/>
    <Acedemia nome="Luiz" idade={26} planoAtual = "Gold" statusMensalidade = {true} />
    <Acedemia nome="João Cesar" idade={16} planoAtual = "Simples" statusMensalidade = {false} />
  </StrictMode>,
)

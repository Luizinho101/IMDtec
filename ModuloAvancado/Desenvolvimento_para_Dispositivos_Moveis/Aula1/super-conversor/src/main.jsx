import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Titulo(){

  return(
    <header>
      <h1>Super conversor</h1>
    </header>
  );
}

function Conversao(props){
  return(
    <>
    <h2>Nome do Produto : {props.nome}</h2>
    <p>Preço original em Dolar : {props.precoDolar}</p>
    <p> O preço convertido para Real (R$) :  {(props.precoDolar * props.cotacao).toFixed(2)}</p>
    </>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo/>
    <Conversao nome= "Teclado Mecânico" precoDolar={49.90} cotacao={5.15}/>
    <Conversao nome= "Mouse sem fio" precoDolar={80.90} cotacao={5.15}/>
  </StrictMode>,
)

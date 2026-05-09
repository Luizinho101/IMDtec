import React from 'react';
import ReactDOM from 'react-dom/client';


function CalculadoraIMC(props) {
  const { peso, altura } = props; 
  const imc = peso / (altura * altura);
  let status = "";
  let cor = "";

  if (imc < 18.5) {
    status = "Abaixo do Peso";
    cor = "orange";
  } else if (imc < 30) {
    status = "Peso Normal";
    cor = "green";
  } else {
    status = "Obesidade";
    cor = "red";
  }

  return (
    <div style={{ padding: '10px', border: '1px solid #eee' }}>
      <p>Seu IMC é: <strong>{imc.toFixed(2)}</strong></p>
      <p>Status: <span style={{ color: cor, fontWeight: 'bold' }}>{status}</span></p>
    </div>
  );
}

function App() {
  return (
    <div>
      <CalculadoraIMC peso={99} altura={1.75} />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


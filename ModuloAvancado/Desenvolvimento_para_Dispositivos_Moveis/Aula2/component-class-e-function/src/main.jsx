import { StrictMode , Component, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


class ComponenteClass extends Component {

  constructor(props){
    super(props);
    this.state ={
      quantidade: 0
    }
  }

  render() {
    return (
      <div >
        <h1>Olá! Sou um Componente de Classe.</h1>

        <h2> Clique: {this.state.quantidade}</h2>
        <button onClick= { () => this.setState({quantidade: this.state.quantidade + 1})}>Aumentar + </button>
        <button onClick= { () => this.setState({quantidade: this.state.quantidade - 1})}>Diminuir - </button>
      </div>
    );
  }
}

function ComponentFunction(){

  const [quantidade, setQuantidade] = useState(0)

  function Aumentar(){
    setQuantidade(quantidade + 1);
  }

  function Diminuir(){
    setQuantidade(quantidade - 1);
  }
  return (
      <div >
        <h1>Olá! Sou um Componente de Função.</h1>
        <h2>Clique : {quantidade}</h2>
        <button onClick= {Aumentar}>Aumentar + </button>
        <button onClick= {Diminuir}>Diminuir - </button>
      </div>
    );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponenteClass />
    <ComponentFunction />
  </StrictMode>,
)

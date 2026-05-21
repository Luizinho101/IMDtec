import { StrictMode , Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


class Teste extends Component {

  render() {
    return (
      <div >
        <h1>Olá! Sou um Componente de Classe.</h1>
      </div>
    );
  }
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Teste />
  </StrictMode>,
)

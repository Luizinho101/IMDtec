import React from 'react';

class App extends React.Component {
  // 1. Estado inicial
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  // 2. Executa quando o componente aparece na tela
  componentDidMount() {
    console.log(`%c [MONTAGEM] Componente montado com valor: ${this.state.contador}`, 'color: green; font-weight: bold');
  }

  // 3. Executa toda vez que o estado muda
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      console.log(`%c [ATUALIZAÇÃO] O contador mudou de ${prevState.contador} para ${this.state.contador}`, 'color: blue');
    }
  }

  // 4. Executa antes do componente sumir
  componentWillUnmount() {
    console.log(" [DESMONTAGEM] O componente foi removido.");
  }

  // Função para mudar o estado
  incrementar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h1>Teste de Ciclo de Vida (Classe)</h1>
        <div style={{ fontSize: '2rem', margin: '20px' }}>
          Contador: <strong>{this.state.contador}</strong>
        </div>
        <button 
          onClick={this.incrementar}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Incrementar +1
        </button>
        <p>Abra o console (F12) para ver os logs acontecendo!</p>
      </div>
    );
  }
}

export default App;
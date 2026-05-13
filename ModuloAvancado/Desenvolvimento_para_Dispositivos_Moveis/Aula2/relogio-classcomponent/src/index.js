import React from 'react';
import ReactDOM from 'react-dom/client';

class ClockClass extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }


  render() {
    return (<div><h1>Hora: {this.state.date.toLocaleTimeString()} </h1></div>);
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClockClass />
);



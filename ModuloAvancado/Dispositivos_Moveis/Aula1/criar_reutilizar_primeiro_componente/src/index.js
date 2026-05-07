import React from 'react';
import ReactDOM from 'react-dom/client';

function Welcome(props) {
  return <h1>Hello {props.name} </h1>
}

function App() {
  return (
    <div>
      <Welcome name="Paulo" />
      <Welcome name="Maria" />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



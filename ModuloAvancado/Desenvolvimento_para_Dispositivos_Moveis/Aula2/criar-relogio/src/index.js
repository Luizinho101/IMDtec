import React from 'react';
import ReactDOM from 'react-dom/client';

function Clock(props) {
  return (
    <div>
      <h1>Hora: {props.date.toLocaleTimeString()}</h1>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  root.render(
    <Clock date={new Date()} />
  );
}





setInterval(tick, 1000);
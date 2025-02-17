import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';

let seconds = 0;

function updateCounter() {
    seconds++;
    document.getElementById("counter").innerText = `Los segundos son: ${seconds}`;
}
setInterval(updateCounter, 1000);

function App() {
  return (
      <div className="App">
          <h1 id="counter">Los segundos son: 0</h1>
      </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


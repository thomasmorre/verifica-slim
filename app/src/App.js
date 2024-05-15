import logo from './logo.svg';
import react, {useState} from 'react';
import './App.css';

function App() {

  const[nPartita, setCount]=useState(0);
  const[numero, setNumero]=useState(null);


  async function iniziaPartita(){
    const avvio = await fetch("http://localhost:8080/partita", {method:"POST"});
    const data = await avvio.json;
    setNumero(data.numero);
    setCount(data.id);
  }

  async function registraTentativo(){
    const avvio = await fetch("http://localhost:8080/partita", {method:"POST"});
    
  }



  return (
    <div className='App'>
      <h3>indovina il numero</h3>
      <p>numero {numero} </p>
      <p>contore {nPartita}</p>
      <button onClick={iniziaPartita}>iniziaPartita</button>

    </div>
  
        
      

    /*
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;

import logo from './logo.svg';
import React , { useState } from 'react';
import './App.css';

const App = () => {
  
  const [counter , setCounter] = useState(0);

  const counterPlus = () => {
    setCounter(counter + 1)
  };

  const counterMines = () => {
    setCounter(counter - 1)
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>{counter}</form>
        <div className='Btn'>
          <button onClick={counterPlus}>Increament</button>
          <button onClick={counterMines}>Decreament</button>
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Board from './components/Board';
  

function App() {
  return (
    <div className="App container">
      <main className="flexbox">        
        <Board id="board-1" className="board">
          
        </Board>
      </main>
    </div>
  );
}

export default App;

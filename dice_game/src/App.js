import React from 'react';
import Board from './components/Board';

class Jogo extends React.Component{
  render(){
    return(
      <div className = "game">
        <div className="game-board">
          <Board />
        </div>
        
        <div calssName="game-info">
        </div>
      </div>
    );
  }
}

export default Jogo;

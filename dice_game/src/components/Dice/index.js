import React from 'react';
import './style.css';

class Dice extends React.Component{
  
  render(){
    return(
      <button
        className="dice">
        {this.props.value}
      </button>
    );
  }  
}

export default Dice;
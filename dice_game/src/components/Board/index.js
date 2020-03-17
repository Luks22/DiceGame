import React from 'react';
import Dice from '../Dice';
import './style.css';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: Array(2).fill(),
            numeroUsuario: 0,
            historico: [],
            acertos: 0,
            erros: 0,
        }
    }


    renderizarDados(i) {
        return (
            <Dice
                value={this.state.dados[i]}
            />
        )
    }

    createBoard = () => {
        let board = [];
        let count = 0;
        for (let i = 0; i < 1; i++) {
            let collums = [];
            for (let j = 0; j < 2; j++) {
                collums.push(this.renderizarDados(count));
                count++;
            }
            board.push(<div className="board-row">{collums}</div>);
        }
        return board;
    }

    RolarDados = () => {
        let dices = this.state.dados.slice();
        let num = 0;
        let acerto = this.state.acertos;
        let erro = this.state.erros;
        let historico = this.state.historico;

        if (this.state.numeroUsuario == 0) {
            alert('Digite a soma dos dados antes de rola-los');
            return;
        }

        for (let i = 0; i < dices.length; i++) {
            dices[i] = Roll();
            num += dices[i];
        }

        if (num == this.state.numeroUsuario) {
            acerto++;
            historico.push('Voce digitou ' + this.state.numeroUsuario + ' e acertou a soma (' + dices[0] + '+' + dices[1] + ')');
        } else {
            erro++;
            historico.push('Voce digitou ' + this.state.numeroUsuario + ' e errou a soma (' + dices[0] + '+' + dices[1] + ')');
        }

        this.setState({
            dados: dices,
            erros: erro,
            acertos: acerto,
            historico: historico,
        });



    }

    createHistory = () => {
        const history = this.state.historico.slice();

        return history.map((his) => {
            return <li className = "history">{his}</li>
        })
    }

    cleanHistory = () => {
        this.setState({
            historico: [],
        })
    }

    render() {

        return (
            <div>
                {this.createBoard()}

                <div className="inputNumber">

                    <label>Digite a soma dos Dados:</label>
                    <input
                        type="number"
                        onChange={(e) => {
                            this.setState({
                                numeroUsuario: e.target.value,
                            })
                        }} />
                </div>

                <div>
                    <button className = "start-button" 
                    onClick={() => { this.RolarDados() }}>Rolar Dados</button>
                </div>

                <div>
                    {this.createHistory()}
                    <button className = "history-button" 
                    onClick={() => { this.cleanHistory() }}>Limpar histórico</button>
                </div>

                <div className = "score">
                    <div>Acertos: {this.state.acertos}</div>
                    <div>Erros: {this.state.erros}</div>
                </div>
            </div>
        );
    }

}

function Roll() {
    let roll = Math.ceil(Math.random() * 10);

    if (roll >= 1 && roll < 7) {
        return roll;
    } else {
        return Roll();
    }
}



export default Board;
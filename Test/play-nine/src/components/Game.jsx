import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import './Numbers.css'

class Game extends Component {
    static randomNumber = () => 1 + Math.floor(Math.random() * 9);
    state = {
        randomNumberOfStars: Game.randomNumber(),
        selectedNumbers: [],
        usedNumbers: [],
        answerIsCorrect: null,
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0){ return;}
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }))
    };

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }))
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            randomNumberOfStars: Game.randomNumber(),
        }))
    }

    redraw = () => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: [],
            randomNumberOfStars: Game.randomNumber(),
        }))
    }

    render() {
        const {selectedNumbers, randomNumberOfStars, answerIsCorrect, usedNumbers } = this.state;
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars} />
                    <Button selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect} acceptAnswer={this.acceptAnswer} redraw={this.redraw} />
                    <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} usedNumbers={usedNumbers} />
            </div>
        );
    }
}

export default Game;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters ';
import EndGame from './EndGame';


class App extends Component {
constructor(){
    super()
    this.state ={
        letters : this.generateLetterStatuses(), 
        solution : {
            word : "TOMER",
            hint : "Name of someone special"
        },
        score : 100,
        gameStatus : true,
        endGameText : ""
    } 
}

restart = () =>{
    this.setState({
        letters : this.generateLetterStatuses(), 
        solution : {
            word : "DEVELOPER",
            hint : "A position in high tech"
        },
        score : 100,
        gameStatus : true,
        endGameText : ""
    })
}

winner(wordArr){
    return wordArr.every(i => this.state.letters[i] == true)
}

endGame(score){
    let wordArr = Array.from(this.state.solution.word)
    let text = ""
    let isGameStillOn = true

    if(this.winner(wordArr)){
        text = "You Won!"
        isGameStillOn =false
    }

    if(score< 0){
        text = "You suck!"
        isGameStillOn =false
    }

    this.setState({
        gameStatus : isGameStillOn,
        endGameText : text
    })
        
}


selectLetter = (letter) =>{
    let currentLetters= this.state.letters
    let score = this.state.score
    if(this.state.solution.word.includes(letter)){
        score += 5
    }
    else{
        score -= 20
    }
    currentLetters[letter] = true
    setTimeout(this.setState({
        letters: currentLetters,
        score : score
    }))
    this.endGame(score)
}

generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
      if(this.state.gameStatus){
          return <div>
                        <Score score={this.state.score}/>
                        <Solution letters={this.state.letters} solution={this.state.solution}/>
                        <Letters letters={this.state.letters} selectLetter={this.selectLetter} />
                </div>
      }

      else{
          return <EndGame endGameText={this.state.endGameText} restart={this.restart}/>
      }
              
    }
}

export default App;

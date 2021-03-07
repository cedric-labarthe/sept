import React, { Component, Fragment } from 'react'

// Import de la feuille de style
import './App.css'

//Import de components
import Game from './components/Game'
import Header from './components/Header'
import StopGame from './components/StopGame'
import Footer from './components/Footer'

class App extends Component {
  state = {
    playerScore1: 0,
    playerScore2: 0,
    actualPlayer: 1,
    maxRounds: 6,
    actualRound: 1,
    instruction: true,
  }

  endGame = (actualRound, maxRounds) =>
    !(actualRound < maxRounds) ? <p>Partie fini !</p> : ''

  addScore = (player, score) => {
    console.log(player, score)
    if (player === 'player1')
      score !== 7
        ? this.setState({ playerScore1: this.state.playerScore1 + score })
        : this.setState({
            playerScore1: 0,
            actualPlayer: 2,
            actualRound: this.state.actualRound + 1,
          })
    else
      score !== 7
        ? this.setState({ playerScore2: this.state.playerScore2 + score })
        : this.setState({
            playerScore2: 0,
            actualPlayer: 1,
            actualRound: this.state.actualRound + 1,
          })
  }

  passTheTurn = (player) =>
    player === 'player1'
      ? this.setState({
          actualPlayer: 2,
          actualRound: this.state.actualRound + 1,
        })
      : this.setState({
          actualPlayer: 1,
          actualRound: this.state.actualRound + 1,
        })
  componentDidMount() {
    if (this.state.instruction) {
      alert(
        "Règles:\n\n  - 2 joueurs\n  - 2 dés\n\nLe premier joueur lance les deux dés : tant qu'il ne fait pas sept, il peut relancer les dés et son score s'additionne.\nLe joueur peut aussi décider de s'arrêter.\nS'il fait sept, son score passe à zéro et son tour s'arrête.\nUne fois que le premier joueur a terminé (s'il s'arrête ou qu'il a fait un sept), c'est au tour du second joueur.\nÀ la fin de la manche, le joueur avec le plus grand score gagne."
      )
      this.setState({ instruction: false })
    }
  }

  render() {
    const player = this.state.actualPlayer === 1 ? 'player1' : 'player2'
    const winner =
      this.state.playerScore1 === this.state.playerScore2
        ? 'Egalité'
        : this.state.playerScore1 > this.state.playerScore2
        ? 'Joueur 1'
        : 'Joueur 2'
    const winnerScore =
      winner === 'Egalité'
        ? this.state.playerScore1
        : winner === 'Joueur 1'
        ? this.state.playerScore1
        : this.state.playerScore2
    const playGame = (
      <Game
        actualPlayer={this.state.actualPlayer}
        playerSelected={player}
        addScore={this.addScore}
        passTurn={this.passTheTurn}
        actualRound={this.state.actualRound}
        maxRounds={this.state.maxRounds}
      />
    )

    const stopGame = <StopGame winner={winner} winnerScore={winnerScore} />

    const continueOrStop =
      this.state.actualRound <= this.state.maxRounds ? playGame : stopGame
    return (
      <Fragment>
        <Header
          p1score={this.state.playerScore1}
          p2score={this.state.playerScore2}
        />
        {continueOrStop} <Footer />
      </Fragment>
    )
  }
}

export default App

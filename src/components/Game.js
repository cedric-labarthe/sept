import './Game.css'

const Game = (props) => {
  let scoreResult = 0
  let firstRoll = 0
  let secondRoll = 0

  const handleValidateRoll = (e) => {
    firstRoll = Math.ceil(Math.random(0, 1) * 6)
    secondRoll = Math.ceil(Math.random(0, 1) * 6)
    scoreResult = firstRoll + secondRoll
    console.log(
      `%c${firstRoll} + %c${secondRoll} = %c${scoreResult}`,
      'color:red',
      'color:green',
      'color: purple; font-size: 20px'
    )
    props.addScore(props.playerSelected, scoreResult)
    alert(
      `Tirage :  ${firstRoll} + ${secondRoll} = ${scoreResult} \n ${
        scoreResult === 7 ? 'OUPS... Joueur suivant !' : 'Relance'
      }`
    )
  }

  const handlePassTurn = (e) => {
    props.passTurn(props.playerSelected)
  }

  return (
    <fieldset>
      <p>
        Round {props.actualRound} / {props.maxRounds}
      </p>
      <p className="player">
        Joueur {props.playerSelected.split('')[props.playerSelected.length - 1]}
      </p>
      <button onClick={handleValidateRoll}>Lancer</button>
      <button onClick={handlePassTurn}>Finir la manche</button>
    </fieldset>
  )
}

export default Game

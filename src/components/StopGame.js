const StopGame = (props) => {
  return (
    <fieldset>
      <p>Le jeu est fini !</p>
      <p>
        Le gagnant est {props.winner} avec {props.winnerScore} points !!!
      </p>
    </fieldset>
  )
}
export default StopGame

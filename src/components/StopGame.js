const StopGame = (props) => {
  const message =
    props.winner === 'Egalité' ? props.winner : `Le gagnant est ${props.winner}`
  return (
    <fieldset>
      <p>Le jeu est fini !</p>
      <p>
        {message} avec {props.winnerScore} points !!!
      </p>
    </fieldset>
  )
}
export default StopGame

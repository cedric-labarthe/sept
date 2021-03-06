import './Header.css'

const Header = (props) => {
  return (
    <header>
      <h1>JEU DE SEPT</h1>
      <ul className="p1">
        <li>Joueur 1</li>
        <li>Score : {props.p1score}</li>
      </ul>
      <ul className="p2">
        <li>Joueur 2</li>
        <li>Score : {props.p2score}</li>
      </ul>
    </header>
  )
}

export default Header

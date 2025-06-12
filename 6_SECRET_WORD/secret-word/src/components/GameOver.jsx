import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Fim do jogo</h1>
      <button onClick={retry}> Tentar novamente </button>
    </div>
  )
}

export default GameOver
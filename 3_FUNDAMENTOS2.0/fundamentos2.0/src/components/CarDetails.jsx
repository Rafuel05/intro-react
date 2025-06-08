const CarDetails = ({marca, idade, cor, novo}) => {
  return (
    <div>
        <h2> Detalhes do carro</h2>

        <ul>
            <li>Marcar: {marca}</li>
            <li>Idade: {idade}</li>
            <li>Cor: {cor}</li>
            <li>{novo == true ? (<p> Este carro é novo</p>) :
             ( <p> este carro é velho </p>)}</li>
        </ul>
    </div>
  )
}

export default CarDetails
import { useState } from "react"

const ManageData = () => {

    let someData =10
    console.log(someData)
    
    const [valor, setValor] = useState('')

    const[number, setNumber] = useState(15);
    console.log(number)

    function onSerach(event){
        setValor(event.target.value)
    }

    return (
    <div>
       <p>Valor: {someData} </p> 
       <button onClick={ () => (someData = 15)}> Mudar Variavel</button>
        <div>
            <p>Valor: {number}</p>
            <button onClick={()=> setNumber(25)}>
                Clique
            </button>
               

            <div>
                <input type="text" onChange={onSerach} />
                <p>{valor}</p>
            </div>
        </div>
    </div>
    
  )
}

export default ManageData
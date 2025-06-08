import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name, setName] = useState('')

    const onNameChange = (event) => setName(event.target.value)


  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {x && <p>Se x for true, sim!</p>}

        <input type="text" onChange={onNameChange} placeholder="Digite um nome:" />

        {name === 'joao' ? (

             <div>
                <p>
                    O nome é joao
                </p>
             </div>

        ) : (
            <div>
                <p>
                    O nome nao é joao
                </p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender
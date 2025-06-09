import { useState } from 'react'
import './App.css'
import Car from './components/Car'

function App() {
  const [count, setCount] = useState(0)


    const myCars =[
      {nome: "Fusca", km:1000 , color:"Branca" },
      {nome: "Polo", km:32000, color: "Cinza"},
      {nome: "Onix", km : 0, color: "Preto" }
    ]

  return (
  
    <>
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car)=>(
          <Car car={car} />
        ))}
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Nina from "./assets/nina.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  const [age, setAge] = useState(1)

  const cars = [
    {id: 1, marca :'Renault', idade : 3, cor : 'azul', novo : true},
    {id: 2,marca :'Fiat', idade : 6, cor : 'preto', novo : true},
    {id: 3,marca :'Renault', idade : 86, cor : 'branco', novo : false},
    {id: 4,marca :'Jeep', idade : 1, cor : 'azul', novo : true},
  ]


  const onAgeClick = () => setAge (prevAge => prevAge + 1)


  return (
    <>
      <h2>Seção 3</h2>
      <button onClick={onAgeClick}> Feliz aniversario</button>
      <div>
        {/* Imagem em public  <img src="/chica.jpg" alt="Chica"/> */}
        
      </div>
      <div>
        {/* Imagme em asset  <img src={Nina} alt="Nina" /> */}
        
        {/*
         <ManageData/>
        <ListRender/>
        <ConditionalRender/> 
         destructuring 
        <CarDetails marca ='Renault' idade = {age} cor = 'azul' novo ={true}/> 
        <CarDetails marca ='Ford' idade = {age} cor = 'preto' novo ={true}/>
        <CarDetails marca ='Fiat' idade = {age} cor = 'branco' novo ={false}/>  
        */}

        {/* props*/ }
        <ShowUserName nome = 'rafael' /> 
        
        {/*Loop em array de objetos*/}
          {cars.map((car)=>
            <CarDetails 
            marca = {car.marca} 
            idade = {car.idade} 
            cor ={car.cor} 
            novo={car.novo}/>
          )}
      </div>
    </>
  )
}

export default App

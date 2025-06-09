import { Fragment, useState } from 'react'
import './App.css'
import Nina from "./assets/nina.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragmento from './components/Fragmento'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageStage from './components/ChangeMessageStage'
import UsersDatails from './components/UsersDatails'

function App() {
  const [count, setCount] = useState(0)

  const [age, setAge] = useState(1)

  const showMessage = () => {
    console.log('Evento do componente pai')
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }


  const users = [
    {id: 1, nome: 'Rafael', idade: 21},
    {id: 2, nome: 'Gustavo', idade: 18},
    {id: 3, nome: 'Tiago', idade: 44},
    {id: 4, nome: 'Luis', idade: 5},
    {id: 5, nome: 'Cleber', idade: 17},
  ]

  const cars = [
    {id: 1, marca :'Renault', idade : 3, cor : 'azul', novo : true},
    {id: 2,marca :'Fiat', idade : age, cor : 'preto', novo : true},
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
            key = {car.id}
            marca = {car.marca} 
            idade = {car.idade} 
            cor ={car.cor} 
            novo={car.novo}/>
          )}

          <Fragmento mensagem = 'oi' />

          <Container>
            <p>E este é o conteúdo</p>
          </Container>

          <ExecuteFunction myFunction = {showMessage} />


          <Message msg={message} />

          <ChangeMessageStage handleMessage = {handleMessage} />

          <UsersDatails userList={users}/>
          
        </div>
    </>
  )
}

export default App

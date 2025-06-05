import { useState } from 'react'
import './App.css'
import Nina from "./assets/nina.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Seção 3</h2>
      <div>
        {/* Imagem em public*/}
        <img src="/chica.jpg" alt="Chica"/>
      </div>

      <div>
        {/* Imagme em asset*/}
        <img src={Nina} alt="Nina" />
        <ManageData/>
        <ListRender/>
      </div>
    </>
  )
}

export default App

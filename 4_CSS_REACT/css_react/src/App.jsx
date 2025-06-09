import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)
  const [redTitle, setRedTitle] = useState(false)

  const onRedClick = () => setRedTitle(prevState => !prevState)

  return (
    <div className='App'>
      <h1>React com CSS</h1>

      <MyComponent />

      <p>Este componente é do app.css</p>

      <button onClick={onRedClick}>Mudar cor</button>
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>


      <Title/>
    </div>
  )
}

export default App

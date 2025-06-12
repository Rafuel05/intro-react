import { useState, useEffect } from 'react'
import {useFetch} from './hooks/UseFetch'
import './App.css'

const url = 'http://localhost:3000/products'

function App() {


  const {data : items, httpConfig, loading} = useFetch(url)
  

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const[price, setPrice] = useState('')

  const handleDelete =(id)=>{
      httpConfig(id, "DELETE")
    }


    //2 - add products
    const handleSubmit = async (e) => {
        e.preventDefault()

        const product ={
          name,
          price,
        }
    //5 - refatorando post

    httpConfig(product, "POST")
      

        setName('')
        setPrice('')

  }
  
  return (
    <div className="app">
        <h1>Lista de produtos</h1>

        {loading && <p>Carregando dados...</p> }
        {!loading && (
          <ul>
          {items && items.map((product) =>(
            <li key={product.id}>{product.name} - R$: {product.price} 
             <button onClick={() => handleDelete(product.id)}>
                            Deletar
                        </button></li>
          ))}
        </ul>
      )}
        

        <div className="add-products">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome: <input type="text" 
                    value={name} 
                    name='name' 
                    onChange={(e)=> setName(e.target.value)} />
                </label>

                <label>
                    Preço: <input type="number" 
                    value={price} 
                    name='price' 
                    onChange={(e)=> setPrice(e.target.value)} />
                </label>               


                {!loading && <input type="submit" value="Criar" />}
                {loading && <input type="submit" disabled value="Aguarde" />}
            </form>
        </div>
    </div>
  )
}

export default App

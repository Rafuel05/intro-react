import { useState } from 'react'
import './MyForm.css'
const MyForm = ({user}) => {
 
    const [name, setName] = useState(user ? user.name : '')
    const[email, setEmail] = useState(user ? user.email : '')
    const[bio, setBio] = useState(user? user.bio : '')
    const [role, setRole] = useState(user? user.role : '')


    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('enviando formulario!')
        console.log('Nome enviado: ' + name)
        console.log('Email enviado: ' + email)
        console.log('Bio enviada: '+bio)
        console.log('Role enviada: ' + role)

        setName('')
        setEmail('')
        setBio('')
    }


    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome:"
                onChange={handleName}
                value={name}
                />
            </div>
            
            
            
            
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" placeholder='Digite seu Email:'
                onChange={(e)=> setEmail(e.target.value)} 
                value={email}
                />
            </label>
           
           
           
           
           <label >
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' 
                onChange={(e)=> setBio(e.target.value)} 
                value={bio}> 
                </textarea>
            </label>



            <label >

                <span>Função no sistema:</span>
                <select name="role" onChange={(e)=>setRole(e.target.value)} value ={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>

            </label>
            
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm
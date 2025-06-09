const UsersDatails = ({userList}) => {
  return (
    <div>
        <ul>
            {userList.map((user)=> (
                <li> key={user.id} - {user.nome} : {user.idade >= 18 ? (<p> Pode tirar a carteira de motorista </p>) 
                    :(<p>Não pode tirar a carteira de motorista</p>)
                }</li>
            ))}
            
        </ul>
    </div>
  )
}

export default UsersDatails
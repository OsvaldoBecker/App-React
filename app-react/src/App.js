import React, { useState } from 'react'
import UserList from './web/userList'
import UserInsert from './web/userInsert'

const App = () => {

  const usersList = [
    { id: 1, name: 'Fulano', email: 'email1@teste', cellphone: '54 6565 5454' },
    { id: 2, name: 'Beltrano', email: 'email2@teste', cellphone: '54 6565 5454' },
  ]

  const [users, setUsers] = useState(usersList)

  const userInsert = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const userDelete = (id) => {
    setUsers(users.filter((users) => users.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD de Usuários</h1>
      <div className="flex-row">
        <div className="flex-large">
          <UserInsert userInsert={userInsert} />
        </div>
        <div className="flex-large">
          <UserList users={users} userDelete={userDelete} />
        </div>
      </div>
    </div>
  )
}

export default App

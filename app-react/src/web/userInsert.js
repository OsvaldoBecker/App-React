import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const UserInsert = (props) => {
    const initialFormState = { id: null, name: '', email: '', cellphone: '' }
    const [user, setUser] = useState(initialFormState)
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ user, [name]: value })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                props.userInsert(user)
                setUser(initialFormState)
            }}
        >
            <label>Nome</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="text" name="email" value={user.email} onChange={handleInputChange} />
            <label>Celular</label>
            <input type="text" name="cellphone" value={user.cellphone} onChange={handleInputChange} />
            <button>Inserir</button>
        </form>
    )
}

export default UserInsert
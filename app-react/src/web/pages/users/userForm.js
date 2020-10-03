import React, { useState, useEffect } from 'react'

const UserForm = (props) => {
    const defaultFormState = { _id: null, name: '', email: '', cellphone: '' }
    const [user, setUser] = useState(defaultFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        if (props.user != null)
            setUser(props.user);
    }, [props.user]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (user._id === null) {
                props.userInsert(user)
            } else {
                props.userUpdate(user)
            }
            setUser(defaultFormState)
        }}>
            <label>Nome</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="text" name="email" value={user.email} onChange={handleInputChange} />
            <label>Celular</label>
            <input type="text" name="cellphone" value={user.cellphone} onChange={handleInputChange} />
            <label>Senha</label>
            <input type="text" name="password" value={user.password} onChange={handleInputChange} />

            <button>Salvar</button>
            <button type="button" onClick={props.cancel}>Cancelar</button>
        </form>
    )
}

export default UserForm

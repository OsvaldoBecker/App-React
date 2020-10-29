import React, { useState, useEffect } from 'react'

const UserForm = (props) => {
    const defaultFormState = { _id: null, title: '', project: '', responsible: '' }
    const [activity, setActivity] = useState(defaultFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setActivity({ ...activity, [name]: value })
    }

    useEffect(() => {
        if (props.activity != null)
            setActivity(props.activity);
    }, [props.activity]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (activity._id === null) {
                props.activityInsert(activity)
            } else {
                props.activityUpdate(activity)
            }
            setActivity(defaultFormState)
        }}>
            <label>Título</label>
            <input type="text" name="title" value={activity.title} onChange={handleInputChange} />
            <label>Projeto</label>
            <input type="text" name="project" value={activity.project} onChange={handleInputChange} />
            <label>Responsável</label>
            <input type="text" name="responsible" value={activity.responsible} onChange={handleInputChange} />

            <button>Salvar</button>
            <button type="button" onClick={props.cancel}>Cancelar</button>
        </form>
    )
}

export default UserForm

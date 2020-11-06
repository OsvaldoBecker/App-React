import React, { useState, useEffect } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const UsersForm = (props) => {

    const [user, setUser] = useState(props.user)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (event) => {
        if (user._id === null)
            props.insertUser(user)
        else
            props.updateUser(user)

        event.preventDefault();
    }

    useEffect(() => {
        if (props.user != null)
            setUser(props.user);
    }, [props.user]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="name">Name</label>
                        <InputText name="name" value={user.name} onChange={handleInputChange} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="email">Email</label>
                        <InputText name="email" value={user.email} onChange={handleInputChange} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="occupation">Occupation</label>
                        <InputTextarea name="occupation" rows={5} cols={30} value={user.occupation} onChange={handleInputChange} autoResize required />
                    </div>
                </div>
                <br />
                <Button icon="pi pi-save" className="p-button-outlined" label="Save"></Button>
                &nbsp;
                &nbsp;
                <Button type="button" icon="pi pi-undo" className="p-button-outlined" label="Cancel" onClick={props.cancel}></Button>
            </form>
        </div>
    )
}

export default UsersForm

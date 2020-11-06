import React, { useState, useEffect } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const ProjectsForm = (props) => {

    const [project, setProject] = useState(props.project)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setProject({ ...project, [name]: value })
    }

    const handleSubmit = (event) => {
        if (project._id === null)
            props.insertProject(project)
        else
            props.updateProject(project)

        event.preventDefault();
    }

    useEffect(() => {
        if (props.project != null)
            setProject(props.project);
    }, [props.project]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="title">Title</label>
                        <InputText name="title" value={project.title} onChange={handleInputChange} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="details">Details</label>
                        <InputTextarea name="details" rows={5} cols={30} value={project.details} onChange={handleInputChange} autoResize />
                    </div>
                    <div className="p-field">
                        <label htmlFor="demandantName">Demandant Name</label>
                        <InputText name="demandantName" value={project.demandantName} onChange={handleInputChange} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="demandantEmail">Demandant Email</label>
                        <InputText name="demandantEmail" value={project.demandantEmail} onChange={handleInputChange} required />
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

export default ProjectsForm

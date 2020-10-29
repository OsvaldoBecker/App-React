import React, { useState, useEffect } from 'react'

const ProjectForm = (props) => {
    const defaultFormState = { _id: null, title: '', details: '', beginDate: '', endDate: '', demandantName: '', demandantEmail: '' }
    const [project, setProject] = useState(defaultFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setProject({ ...project, [name]: value })
    }

    useEffect(() => {
        if (props.project != null)
            setProject(props.project);
    }, [props.project]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (project._id === null) {
                props.projectInsert(project)
            } else {
                props.projectUpdate(project)
            }
            setProject(defaultFormState)
        }}>
            <label>Título</label>
            <input type="text" name="title" value={project.title} onChange={handleInputChange} />
            <label>Detalhes</label>
            <input type="text" name="details" value={project.details} onChange={handleInputChange} />
            <label>Data de Início</label>
            <input type="date" name="beginDate" value={project.beginDate} onChange={handleInputChange} />
            <label>Data de Término</label>
            <input type="date" name="endDate" value={project.endDate} onChange={handleInputChange} />
            <label>Nome do Demandante</label>
            <input type="text" name="demandantName" value={project.demandantName} onChange={handleInputChange} />
            <label>Email do Demandante</label>
            <input type="text" name="demandantEmail" value={project.demandantEmail} onChange={handleInputChange} />

            <button>Salvar</button>
            <button type="button" onClick={props.cancel}>Cancelar</button>
        </form>
    )
}

export default ProjectForm

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import UserService from "../../services/UserService";
import ProjectService from "../../services/ProjectService";

const AtividadeForm = (props) => {

    const [activity, setActivity] = useState(props.activity)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setActivity({ ...activity, [name]: value })
    }

    const handleSubmit = (event) => {
        if (activity._id === null)
            props.insertActivity(activity)
        else
            props.updateActivity(activity)

        event.preventDefault();
    }

    useEffect(() => {
        if (props.activity != null)
            setActivity(props.activity);
    }, [props.activity]);

    let eng = {
        firstDayOfWeek: 1,
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'dd/mm/yy',
        weekHeader: 'Week'
    };

    const [users, setUsers] = useState([])
    const [usersFiltered, setUsersFiltered] = useState([])

    const getUsers = () => {
        UserService.getAll()
            .then(response => {
                setUsers(response.data)
            })
            .catch(e => {
                toast.error(e);
            });
    }

    const filtrateUser = (event) => {
        setTimeout(() => {
            let filtereds;
            if (!event.query.trim().length) {
                filtereds = [...users];
            }
            else {
                filtereds = users.filter((user) => {
                    return user.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            setUsersFiltered(filtereds);
        }, 250);
    }

    const [projects, setProjects] = useState([])
    const [projectsFiltered, setProjectsFiltered] = useState([])

    const getProjects = () => {
        ProjectService.getAll()
            .then(response => {
                setProjects(response.data)
            })
            .catch(e => {
                toast.error(e);
            });
    }

    const filtrateProject = (event) => {
        setTimeout(() => {
            let filtereds;
            if (!event.query.trim().length) {
                filtereds = [...projects];
            }
            else {
                filtereds = projects.filter((project) => {
                    return project.title.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            setProjectsFiltered(filtereds);
        }, 250);
    }

    useEffect(() => {
        getProjects();
        getUsers();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="title">Title</label>
                        <InputText name="title" value={activity.title} onChange={handleInputChange} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="details">Details</label>
                        <InputTextarea name="details" rows={5} cols={30} value={activity.details} onChange={handleInputChange} autoResize />
                    </div>
                    <div className="p-field">
                        <label htmlFor="beginDate">Begin Date</label>
                        <Calendar name="beginDate" locale={eng} dateFormat="dd/mm/yy" value={new Date(activity.beginDate)} onChange={handleInputChange} showIcon required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="endDate">End Date</label>
                        <Calendar name="endDate" locale={eng} dateFormat="dd/mm/yy" value={new Date(activity.endDate)} onChange={handleInputChange} showIcon required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="responsible">Responsible</label>
                        <AutoComplete dropdown name="responsible" value={activity.responsible} suggestions={usersFiltered}
                            completeMethod={filtrateUser} field="name" onChange={handleInputChange} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="project">Project</label>
                        <AutoComplete dropdown name="project" value={activity.project} suggestions={projectsFiltered}
                            completeMethod={filtrateProject} field="title" onChange={handleInputChange} />
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

export default AtividadeForm

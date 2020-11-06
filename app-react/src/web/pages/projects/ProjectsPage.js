import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ProjectsList from './ProjectsList';
import ProjectsForm from './ProjectsForm';
import ProjectService from "../../services/ProjectService";

const ProjectsPage = () => {

  const defaultProject = { _id: null, beginDate: new Date() }
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState(defaultProject)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    getProjects();
  }, []);

  function Screen() {
    if (editing)
      return <ProjectsForm project={project} insertProject={insertProject} updateProject={updateProject} cancel={cancel} />
    else
      return <ProjectsList projects={projects} deleteProject={deleteProject} editProject={editProject} />
  }

  const getProjects = () => {
    ProjectService.getAll()
      .then(response => {
        setProjects(response.data)
      })
      .catch(e => {
        toast.error(e);
      });
  }

  const insertProject = (project) => {
    ProjectService.insert(project).then(response => {
      getProjects();
      setEditing(false);
      toast.success('Success!');
    }).catch(e => {
      toast.error(e.response.data);
    });
  }

  const deleteProject = (id) => {
    ProjectService.delete(id).then(response => {
      getProjects();
      toast.success('Success!');
    }).catch(e => {
      toast.error(e.response.data);
    });
  }

  const editProject = (id) => {
    setEditing(true);
    if (id === null)
      setProject(defaultProject);
    else
      setProject(projects.filter((project) => project._id === id)[0])
  }

  const updateProject = (project) => {
    ProjectService.update(project).then(response => {
      getProjects();
      setEditing(false);
      toast.success('Success!');
    }).catch(e => {
      toast.error(e.response.data);
    });
  }

  const cancel = () => {
    toast.info('Cancelled!');
    setEditing(false);
  }

  return (
    <div className="container">
      <h1>Projects Manager</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <Screen />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

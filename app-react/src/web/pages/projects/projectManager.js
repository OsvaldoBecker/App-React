import React, { useState, useEffect } from 'react';
import ProjectForm from './projectForm';
import ProjectOperations from './projectOperations';
import ProjectService from "../../services/projectService";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ProjectManager = () => {

  const defaultProject = { _id: null, title: '', details: '', beginDate: '', endDate: '', demandantName: '', demandantEmail: '' }
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState(defaultProject)
  const [editing, setEditing] = useState(false)

  function Screen(props) {
    if (editing) {
      return <ProjectForm project={project} projectInsert={projectInsert} projectUpdate={projectUpdate} cancel={cancel} />
    }
    else {
      return <ProjectOperations projects={projects} projectDelete={projectDelete} projectEdit={projectEdit} />
    }
  }

  useEffect(() => { projectsGetAll(); }, []);

  const projectsGetAll = () => {
    ProjectService.getAll().then(response => {
      setProjects(response.data)
    }).catch(e => {
      toast.error(e);
    });
  }

  const projectInsert = (project) => {
    ProjectService.insert(project).then(response => {
      toast.success('Inserido com sucesso!');
      projectsGetAll();
      setEditing(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const projectDelete = (id) => {
    ProjectService.delete(id).then(response => {
      toast.success('Excluído com sucesso!');
      projectsGetAll();
    }).catch(e => {
      toast.error(e);
    });
  }

  const projectUpdate = (project) => {
    ProjectService.update(project).then(response => {
      toast.success('Alterado com sucesso!');
      projectsGetAll();
      setEditing(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const projectEdit = (id) => {
    setEditing(true);
    if (id === null)
      setProject(defaultProject);
    else
      setProject(projects.filter((project) => project._id === id)[0])
  }

  const cancel = () => {
    toast.info('Operação cancelada!');
    setEditing(false);
  }

  return (
    <div className="container">
      <h1>CRUD de Projetos</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <Screen />
        </div>
      </div>
    </div>
  )
}

export default ProjectManager

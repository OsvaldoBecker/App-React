import React, { useState, useEffect } from 'react';
import ActivityForm from './activityForm';
import ActivityOperations from './activityOperations';
import ActivityService from "../../services/activityService";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ActivityManager = () => {

  const defaultActivity = { _id: null, name: '', email: '', celular: '' }
  const [activities, setActivities] = useState([])
  const [activity, setActivity] = useState(defaultActivity)
  const [editing, setEditing] = useState(false)

  function Screen(props) {
    if (editing) {
      return <ActivityForm activity={activity} activityInsert={activityInsert} activityUpdate={activityUpdate} cancel={cancel} />
    }
    else {
      return <ActivityOperations activities={activities} activityDelete={activityDelete} activityEdit={activityEdit} />
    }
  }

  useEffect(() => { activitiesGetAll(); }, []);

  const activitiesGetAll = () => {
    ActivityService.getAll().then(response => {
      setActivities(response.data)
    }).catch(e => {
      toast.error(e);
    });
  }

  const activityInsert = (activity) => {
    ActivityService.insert(activity).then(response => {
      toast.success('Inserido com sucesso!');
      activitiesGetAll();
      setEditing(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const activityDelete = (id) => {
    ActivityService.delete(id).then(response => {
      toast.success('Excluído com sucesso!');
      activitiesGetAll();
    }).catch(e => {
      toast.error(e);
    });
  }

  const activityUpdate = (activity) => {
    ActivityService.update(activity).then(response => {
      toast.success('Alterado com sucesso!');
      activitiesGetAll();
      setEditing(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const activityEdit = (id) => {
    setEditing(true);
    if (id === null)
      setActivity(defaultActivity);
    else
      setActivity(activities.filter((activity) => activity._id === id)[0])
  }

  const cancel = () => {
    toast.info('Operação cancelada!');
    setEditing(false);
  }

  return (
    <div className="container">
      <h1>CRUD de Atividades</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <Screen />
        </div>
      </div>
    </div>
  )
}

export default ActivityManager

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ActivitiesList from './ActivitiesList';
import ActivitiesForm from './ActivitiesForm';
import ActivityService from "../../services/ActivityService";

const ActivitiesPage = () => {

  const defaultActivity = { _id: null, beginDate: new Date() }
  const [activity, setActivity] = useState(defaultActivity)
  const [activities, setActivities] = useState([])
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    getActivities();
  }, []);

  function Screen() {
    if (editing)
      return <ActivitiesForm activity={activity} insertActivity={insertActivity} updateActivity={updateActivity} cancel={cancel} />
    else
      return <ActivitiesList activities={activities} deleteActivity={deleteActivity} editActivity={editActivity} />
  }

  const getActivities = () => {
    ActivityService.getAll()
      .then(response => {
        setActivities(response.data)
      })
      .catch(e => {
        toast.error(e);
      });
  }

  const insertActivity = (activity) => {
    ActivityService.insert(activity).then(response => {
      getActivities();
      setEditing(false);
      toast.success('Success!');
    }).catch(e => {
      toast.error(e.response.data);
    });
  }

  const deleteActivity = (id) => {
    ActivityService.delete(id).then(response => {
      getActivities();
      toast.success('Success!');
    }).catch(e => {
      toast.error(e.response.data);
    });
  }

  const editActivity = (id) => {
    setEditing(true);
    if (id === null)
      setActivity(defaultActivity);
    else
      setActivity(activities.filter((activity) => activity._id === id)[0])
  }

  const updateActivity = (activity) => {
    ActivityService.update(activity).then(response => {
      getActivities();
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
      <h1>Activities Manager</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <Screen />
        </div>
      </div>
    </div>
  )
}

export default ActivitiesPage

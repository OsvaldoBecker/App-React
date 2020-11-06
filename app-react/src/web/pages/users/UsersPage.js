import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import UsersList from './UsersList';
import UsersForm from './UsersForm';
import UserService from "../../services/UserService";

const UsersPage = () => {

  const defaultUser = { _id: null }
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(defaultUser)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    getUsers();
  }, []);

  function Screen() {
    if (editing)
      return <UsersForm user={user} insertUser={insertUser} updateUser={updateUser} cancel={cancel} />
    else
      return <UsersList users={users} deleteUser={deleteUser} editUser={editUser} />
  }

  const getUsers = () => {
    UserService.getAll()
      .then(response => {
        setUsers(response.data)
      })
      .catch(e => {
        toast.error(e);
      });
  }

  const insertUser = (user) => {
    UserService.insert(user).then(response => {
      getUsers();
      setEditing(false);
      toast.success('Success!');
    }).catch(e => {
      toast.error(e.response.data);
    });
  }

  const deleteUser = (id) => {
    UserService.delete(id).then(response => {
      getUsers();
      toast.success('Success!');
    }).catch(e => {
      toast.error(e.response.data);
    });
  }

  const editUser = (id) => {
    setEditing(true);
    if (id === null)
      setUser(defaultUser);
    else
      setUser(users.filter((user) => user._id === id)[0])
  }

  const updateUser = (user) => {
    UserService.update(user).then(response => {
      getUsers();
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
      <h1>Users Manager</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <Screen />
        </div>
      </div>
    </div>
  )
}

export default UsersPage

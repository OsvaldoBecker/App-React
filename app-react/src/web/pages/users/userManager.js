import React, { useState, useEffect } from 'react';
import UserForm from './userForm';
import UserOperations from './userOperations';
import UserService from "../../services/userService";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const UserManager = () => {

  const defaultUser = { _id: null, name: '', email: '', celular: '' }
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(defaultUser)
  const [editing, setEditing] = useState(false)

  function Screen(props) {
    if (editing) {
      return <UserForm user={user} userInsert={userInsert} userUpdate={userUpdate} cancel={cancel} />
    }
    else {
      return <UserOperations users={users} userDelete={userDelete} userEdit={userEdit} />
    }
  }

  useEffect(() => { usersGetAll(); }, []);

  const usersGetAll = () => {
    UserService.getAll().then(response => {
      setUsers(response.data)
    }).catch(e => {
      toast.error(e);
    });
  }

  const userInsert = (user) => {
    UserService.insert(user).then(response => {
      toast.success('Inserido com sucesso!');
      usersGetAll();
      setEditing(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const userDelete = (id) => {
    UserService.delete(id).then(response => {
      toast.success('Excluído com sucesso!');
      usersGetAll();
    }).catch(e => {
      toast.error(e);
    });
  }

  const userUpdate = (user) => {
    UserService.update(user).then(response => {
      toast.success('Alterado com sucesso!');
      usersGetAll();
      setEditing(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const userEdit = (id) => {
    setEditing(true);
    if (id === null)
      setUser(defaultUser);
    else
      setUser(users.filter((user) => user._id === id)[0])
  }

  const cancel = () => {
    toast.info('Operação cancelada!');
    setEditing(false);
  }

  return (
    <div className="container">
      <h1>CRUD de Usuários</h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <Screen />
        </div>
      </div>
    </div>
  )
}

export default UserManager

import React, { Component } from 'react';
import Api from './Api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {

  constructor() {
    super();
    this.state = { users: [] }
    this.onClickAtualizar = this.onClickAtualizar.bind(this);
  }

  componentDidMount() {
    Api.get('getUsers')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  onClickAtualizar() {
    Api.get('getUsers')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <div className="App">

        <h2>Listagem de Usuários</h2>
        <br></br>

        <button onClick={this.onClickAtualizar} type="button">Atualizar lista</button>
        <br></br>
        <br></br>

        {
          <table className="table">
            {
              this.state.users.map(function (u) {
                return (
                  <tr>
                    <td>{u.nome}</td>
                    <td>{u.email}</td>
                    <td>{u.celular}</td>
                  </tr>
                );
              })
            }
          </table>
        }
      </div>
    )
  }
}

export default App;
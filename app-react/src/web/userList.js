import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const UsersList = (props) => (
    <table className="table">
        <thead>
            <tr> <th>Nome</th> <th>Email</th> <th>Celular</th> <th>Operações</th> </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (props.users.map((u) => (
                <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.cellphone}</td>
                    <td>
                        <button className="button muted-button">Editar</button>
                        <button className="button muted-button" onClick={() => props.userDelete(u.id)}>Excluir</button>
                    </td>
                </tr>
            ))) : (
                    <tr>
                        <td colSpan={4}>Nenhum usuário!</td>
                    </tr>
                )
            }
        </tbody>
    </table>
)

export default UsersList
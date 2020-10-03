import React from 'react';

const UserList = (props) => (
    <div>
        <button className="button muted-button" onClick={() => props.userEdit(null)}>Novo</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Celular</th>
                    <th>Operações</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (props.users.map((u, index) => (
                    <tr key={index}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.cellphone}</td>
                        <td>
                            <button className="button muted-button" onClick={() => props.userEdit(u._id)}>Editar</button>
                            <button className="button muted-button" onClick={() => props.userDelete(u._id)}>Excluir</button>
                        </td>
                    </tr>
                ))) : (
                        <tr>
                            <td colSpan={3}>Nenhum usuário!</td>
                        </tr>
                    )}
            </tbody>

        </table>
    </div>
)
export default UserList

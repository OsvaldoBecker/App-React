import React from 'react';

const ProjectList = (props) => (
    <div>
        <button className="button muted-button" onClick={() => props.projectEdit(null)}>Novo</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Detalhes</th>
                    <th>Data de Início</th>
                    <th>Data de Término</th>
                    <th>Nome do Demandante</th>
                    <th>Email do Demandante</th>
                </tr>
            </thead>
            <tbody>
                {props.projects.length > 0 ? (props.projects.map((p, index) => (
                    <tr key={index}>
                        <td>{p.title}</td>
                        <td>{p.details}</td>
                        <td>{p.beginDate}</td>
                        <td>{p.endDate}</td>
                        <td>{p.demandantName}</td>
                        <td>{p.demandantEmail}</td>
                        <td>
                            <button className="button muted-button" onClick={() => props.projectEdit(p._id)}>Editar</button>
                            <button className="button muted-button" onClick={() => props.projectDelete(p._id)}>Excluir</button>
                        </td>
                    </tr>
                ))) : (
                        <tr>
                            <td colSpan={3}>Nenhum projeto!</td>
                        </tr>
                    )}
            </tbody>

        </table>
    </div>
)
export default ProjectList

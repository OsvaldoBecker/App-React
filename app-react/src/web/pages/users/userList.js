import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

import UserService from '../../services/userService';

export class UserList extends Component {

    emptyUser = {
        id: null,
        name: '',
        email: '',
        cellphone: ''
    };

    constructor(props) {
        super(props);

        this.state = {
            users: props.users,
            user: this.emptyUser
        };
    }

    componentDidMount() {
        UserService.get().then(data => this.setState({ users: data }));
    }

    render() {

        return (
            <div className="datatable-crud-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <Toolbar className="p-mb-4" left={this.leftToolbarTemplate} right={this.rightToolbarTemplate}></Toolbar>

                    <DataTable value={this.state.users} paginator
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    >

                        <Column field="name" header="Name" sortable></Column>
                        <Column field="email" header="Email" sortable></Column>
                        <Column field="cellphone" header="Celular" sortable></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default UserList;
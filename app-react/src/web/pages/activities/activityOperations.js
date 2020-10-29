import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const ActivityList = (props) => (
    <div>
        <Button type="button" icon="pi pi-plus" className="p-button-text" onClick={() => props.activityEdit(null)} />
        <DataTable value={props.activities} paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[5, 10, 15]}>
            <Column field="title" header="Atividade"></Column>
            <Column field="project" header="Projeto"></Column>
            <Column field="responsible" header="Responsável"></Column>
            <Column field="" header="Op"></Column>
            <React.Fragment>
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2"  />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-warning"  />
        </React.Fragment>
            
        </DataTable>
    </div>
)
export default ActivityList
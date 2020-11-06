import React, { useState } from 'react';

import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';

const ProjectsList = (props) => {

  const [confirmationDialog, setConfirmationDialog] = useState(false)
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  const actions = (rowData) => {
    return (
      <React.Fragment>
        <Button type="button" icon="pi pi-pencil" className="p-button-rounded p-button-text " onClick={() => props.editProject(rowData._id)}></Button>
        <Button type="button" icon="pi pi-trash" className="p-button-rounded p-button-text" onClick={() => { setSelectedProjectId(rowData._id); setConfirmationDialog(true) }}></Button>
      </React.Fragment>
    );
  }

  return (
    <div className="dialog-demo">
      <div className="card">
        <Button icon="pi pi-plus-circle" className="p-button-outlined" label="New Project" onClick={() => props.editProject(null)}></Button>
        <br />
        <br />
        <DataTable value={props.projects} paginator className="p-datatable-sm" style={{ padding: '0.0rem 0.5rem;' }}
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5, 20, 50]}>

          <Column field="title" header="Title" sortable filter></Column>
          <Column field="demandantEmail" header="Demandant Email" sortable filter></Column>
          <Column header="Actions" body={actions}></Column>
        </DataTable>

        <Dialog visible={confirmationDialog} modal style={{ width: '350px' }} onHide={() => setConfirmationDialog(false)}>
          <div style={{ textAlign: 'center' }}>
            <h1>Confirm delection?</h1>
            <br />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => { props.deleteProject(selectedProjectId); setConfirmationDialog(false); }} autoFocus />
            &nbsp;
            &nbsp;
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setConfirmationDialog(false)} className="p-button-text" />
          </div>
        </Dialog>
      </div>
    </div>
  );
}
export default ProjectsList

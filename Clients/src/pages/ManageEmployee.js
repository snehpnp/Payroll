import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";


function ManageEmployee() {

  const columns = [
    {
      name: 'Serial',
      selector: row => row.id,
    },
    {
      name: 'Name',
      selector: row => row.title,
    },
    {
      name: 'Email',
      selector: row => row.year,
    },
    {
      name: 'Department',
      selector: row => row.title,
    },
    {
      name: 'Department',
      selector: row => row.title,
    },
    {
      name: 'Designation',
      selector: row => row.year,
    },
    {
      name: 'Status',
      width: '120px !important',
      selector: row => (
        <>
        <button class="btn btn-success" type="button" id="dropdownMenuButton" style={{"width":"80px","backgroundColor":"#3CD923"}}>
            View
          </button>
        </>
      ),
    },
    {
      name: <h6>Actions</h6>,
      width: '320px !important',
      cell: (row) => (

        <>
          <button class="btn btn-secondary" type="button" id="dropdownMenuButton" style={{"backgroundColor":"#33EEBE","marginLeft":"5px"}}>
          <i class="fa-duotone fa-eye"></i> View
          </button>
          <button class="btn btn-secondary" type="button" id="dropdownMenuButton" style={{"backgroundColor":"#6259F1","marginLeft":"5px"}}>
            Edit
          </button>
          <button class="btn btn-secondary" type="button" id="dropdownMenuButton"style={{"backgroundColor":"#EA451E","marginLeft":"5px"}}>
            Delete
          </button>
          
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
    }, {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
    }, {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]



  const customStyles = {

    headCells: {
      style: {
        fontWeight: '700',
        // margin:' 19px 0px',
        backgroundColor: '#000',
        color: '#fff',

        justifyContent: 'center !important',
        overflow: 'visible !important',
      },
    },
    rows: {
      style: {
        justifyContent: 'center !important',
      },
    },
    cells: {
      style: {
        overflow: 'visible !important',
        justifyContent: 'center !important',
      },
    },
  };


  return (
    <>
      <h5 className="title"> Manage Employe</h5><hr />

      <div className="row d-flex justify-content-end">
        <div className="card-body">
          <div className="table-responsive">

            <DataTableExtensions
              columns={columns}
              data={data}
              export={false}
              print={false}
            >
              <DataTable
                fixedHeader
                fixedHeaderScrollHeight="700px"
                noHeader
                defaultSortField="id"
                defaultSortAsc={false}
                pagination
                customStyles={customStyles}
                highlightOnHover
                paginationRowsPerPageOptions={[10, 50, 100]}
                paginationComponentOptions={{ selectAllRowsItem: true, selectAllRowsItemText: 'All' }}
              />
            </DataTableExtensions>


          </div>
        </div>
      </div>
    </>
  )
}

export default ManageEmployee
import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate } from "react-router-dom"

import Card from 'react-bootstrap/Card';

function ManageEmployee() {
  const navigate = useNavigate();

  const columns = [
    {
      name: 'Serial',
      width: '80px !important',
      selector: row => row.id,
    },
    {
      name: 'Name',
      width: '150px !important',
      selector: row => row.title,
    },
    {
      name: 'Email',
      width: '150px !important',
      selector: row => row.email,
    },
    {
      name: 'Department',
      width: '160px !important',
      selector: row => row.title,
    },
    {
      name: 'Department',
      width: '160px !important',
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
          <button className="" type="button" style={{ "width": "80px", "backgroundColor": "#3CD923", "borderRadius": "4px" }}  >
            <i className="fa-solid fa-pen-to-square"></i> ACTION
          </button>
        </>
      ),
    },
    {
      name: <h6>Actions</h6>,
      width: '120px !important',
      cell: (row) => (

        <>

          <h6><i className="fa-solid fa-eye" onClick={() => navigate("/employee/view")}></i> </h6>
          <h6><i className="fa-solid fa-pen-to-square" style={{ "marginLeft": "10px" }}></i></h6>
          <h6> <i className="fa-solid fa-trash" style={{ "marginLeft": "10px" }}></i></h6>

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
      email: "Sneh@gamial.com"
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    }, {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    }, {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    },
    {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    }, {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    }
  ]



  const customStyles = {

    headCells: {
      style: {
        fontWeight: '700',
        marginTop: "10px",
        // marginLeft:"2px" ,

        backgroundColor: 'rgb(240, 180, 14);',
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
        textAlign: "right"
      },
    },
  };


  return (
    <>

      <Card>
        <Card.Body>
          <Card.Text>
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
                paginationRowsPerPageOptions={[5, 50, 100]}
                paginationComponentOptions={{ selectAllRowsItem: true, selectAllRowsItemText: 'All' }}
              />
            </DataTableExtensions>
          </Card.Text>

        </Card.Body>
      </Card>

    </>
  )
}

export default ManageEmployee
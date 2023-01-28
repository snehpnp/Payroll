import React from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function PayslipList() {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


  const columns = [
    {
      name: 'Serial',
      width: '90px !important',
      selector: (row, index) => index + 1,
    },
    {
      name: 'Employee Name',
      width: '140px !important',
      selector: row => row.title,
    },
    {
      name: 'Summery',
      width: '140px !important',
      selector: row => row.title,
    }, {
      name: 'Year',
      width: '100px !important',
      selector: row => "2023",
    },

    {
      name: 'Month',
      width: '80px !important',
      selector: row => "March",
    },
    {
      name: 'Status',
      width: '160px !important',
      selector: row => (row.status == 1 ? <>
        <button type="button" className="btn btn-warning" style={{ "width": "100px", "height": "30px", "fontSize": "15px" }} ><i className="fa-sharp fa-solid fa-xmark"></i> Unpaid</button>
      </> : <>
        <button type="button" className="btn btn-primary" style={{ "width": "100px", "height": "30px", "fontSize": "15px" }}><i className="fa-solid fa-pen-to-square" ></i> Paid</button>
      </>)

      ,
    },

    {
      name: 'Option',
      width: '230px !important',
      cell: (row) => (

        <>
          <div className="form-group row">
            <div className="col-md-5">
              <button type="button" className="btn btn-info" style={{ "width": "100px", "height": "30px", "fontSize": "15px" }} ><i className="fa-solid fa-tag"></i> Payslip</button>
            </div>

            <div className="col-md-5">
              <button type="button" className="btn btn-danger" style={{ "width": "100px", "height": "30px", "fontSize": "15px" }} ><i className="fa-solid fa-trash" ></i>  Delete</button>
            </div>
          </div>

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
      email: "Sneh@gamial.com",
      status: 1
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com",
      status: 2

    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com",
      status: 2


    }, {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com",
      status: 1

    }, {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com",
      status: 1

    },
    {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email: "Sneh@gamial.com"

    },
  ]



  const customStyles = {

    headCells: {
      style: {
        fontWeight: '700',
        marginTop: "10px",

        backgroundColor: 'rgb(240, 180, 14);',
        color: '#fff',


        justifyContent: 'center !important',
        overflow: 'visible !important',
      },
    },
    rows: {
      style: {
        justifyContent: 'start !important',
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





      <Card>
        <Card.Body>
      <Card.Title>Search Paylist <hr /></Card.Title>
          <Card.Text>
            <div style={{ "display": "flex" }}>

              <div className="yearBox" style={{ "marginLeft": "50px" }}>
                <label htmlFor="year">Year :</label><br />
                <select id="cars" name="cars" style={{ "width": "150px" }}>
                  <option value="volvo">2023</option>
                  <option value="volvo">2024</option>
                  <option value="volvo">2025</option>


                </select>
              </div>
              <div className="monthBox" style={{ "marginLeft": "50px" }}>
                <label htmlFor="cars">Month :</label><br />
                <select id="cars" name="cars" style={{ "width": "150px" }}>
                  {
                    month.map((val) => {
                      return <option value={val}>{val}</option>
                    })
                  }

                </select>
              </div>
              <div className="SubmitBtn" style={{ "marginLeft": "50px", "marginTop": "15px" }}>
                <button type="button" className="btn btn-success" style={{ "width": "180px" }}  >Show Reports</button>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>


      <Card>

        <Card.Body>
          <Card.Text>
            <DataTable
              columns={columns}
              data={data}
              fixedHeader
              fixedHeaderScrollHeight="700px"
              noHeader

              pagination
              customStyles={customStyles}
              highlightOnHover
              paginationRowsPerPageOptions={[5, 50, 100]}
              paginationComponentOptions={{ selectAllRowsItem: true, selectAllRowsItemText: 'All' }}
            />
          </Card.Text>
        </Card.Body>
      </Card>




    </>
  )
}

export default PayslipList
import React from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import {useNavigate} from "react-router-dom"


function PayslipList() {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


  const columns = [
    {
      name: 'Serial',
      width: '100px !important',
      selector: (row,index) => index+1,
    },
    {
      name: 'Employee Name',
      width: '160px !important',
      selector: row => row.title,
    },
    {
        name: 'Summery',
        width: '160px !important',
        selector: row => row.title,
      }, {
        name: 'Yea',
        width: '160px !important',
        selector: row => row.title,
      },
  
    {
      name: 'Month',
      width: '160px !important',
      selector: row => row.year,
    },
    {
        name: 'Status',
        width: '160px !important',
        selector: row => (row.status == 1 ?  <>
          <button type="button" class="btn btn-warning" ><i class="fa-sharp fa-solid fa-xmark"></i>Unpaid</button>
         </>:  <>
          <button type="button" class="btn btn-primary" ><i className="fa-solid fa-pen-to-square" style={{"marginLeft":"10px"}}></i>Paid</button>
         </>)
        
        ,
      },
   
    {
      name: 'Option',
      width: '120px !important',
      cell: (row) => (

        <>
         
         <h6><i className="fa-solid fa-pen-to-square" style={{"marginLeft":"10px"}}></i></h6>
         <h6> <i className="fa-solid fa-trash" style={{"marginLeft":"10px"}}></i></h6>
          
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
      email:"Sneh@gamial.com",
      status:1
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      email:"Sneh@gamial.com",
      status:2

    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
      email:"Sneh@gamial.com",
      status:2


    }, {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
      email:"Sneh@gamial.com",
      status:1

    }, {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email:"Sneh@gamial.com",
      status:1

    },
    {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      email:"Sneh@gamial.com"

    },
  ]



  const customStyles = {

    headCells: {
      style: {
        fontWeight: '700',
        marginTop:"10px" ,
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
        justifyContent: 'start !important',
        textAlign:"right"
      },
    },
  };


  return (
    <>

      <div className='payslipListeHeader' >
        <h4>Payslip List</h4><hr />
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
            <button type="button" class="btn btn-success" style={{ "width": "180px" }}  >Show Reports</button>
          </div>
        </div>

      </div>

      <div className="paysliplistMain">

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
      </div>

    </>
  )
}

export default PayslipList
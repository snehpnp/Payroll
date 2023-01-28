import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function View() {
  const [modal, setModal] = useState(1)

  const columns = [
    {
      name: 'Serial',
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
  ]

  return (
    <>


      <Card>

        <Card.Body>
          <Card.Title> 
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" onClick={() => setModal(1)}>Personal Details</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" onClick={() => setModal(2)}>Company Documents</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" onClick={() => setModal(3)}>Financial Details</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" onClick={() => setModal(4)}>Account Details</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" onClick={() => setModal(5)}>Document</a>
                  </li>
                </ul>

              </div>
            </div>
          </nav></Card.Title>
          <Card.Text>
            {modal == 1 ? <>
              {/* <h1>Personal Details</h1> */}
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile" width={"150px"} />


              <table style={{"display":"flex"}}>
                <div style={{"marginLeft":"10px"}}>
                <tr>
                  <td>Nane</td>
                  <td>Sneh Jaiswal</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>snehj121@gmail.com</td>
                </tr>
                <tr>
                  <td>Father Name</td>
                  <td>Shiv kumar</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>20-11-2002</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>Phone 1</td>
                  <td>709510697</td>
                </tr>
                <tr>
                  <td>Phone 2</td>
                  <td>709510697</td>
                </tr>
               
                </div>
              
              <div style={{"marginLeft":"400px"}}>
              <tr>
                  <td>Local Address</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Parmanent Address</td>
                  <td>Italy</td>
                </tr>
              <tr>
                  <td>Natiionality</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Refence 1</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Refence 2</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Artial Status</td>
                  <td>Italy</td>
                </tr>
                <tr>
                  <td>Who are You ?</td>
                  <td>Italy</td>
                </tr>
              </div>
              
              </table>



            </> : ""}

            {modal == 2 ? <>
              <table>
                <tr>
                  <td>Employee Id</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Deparment</td>
                  <td>IT Feilds</td>
                </tr>
                <tr>
                  <td>Date Of Joining</td>
                  <td>01-01-2021</td>
                </tr>
                <tr>
                  <td>Date Of Leaving</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>Active</td>
                </tr>

              </table>
            </> : ""}

            {modal == 3 ? <>
              <table>
                <tr>
                  <td>Basic Salary</td>
                  <td>8000</td>
                </tr>
                <tr>
                  <td>HRA</td>
                  <td>300.5</td>
                </tr>
                <tr>
                  <td>Monthly Tax Deduction</td>
                  <td>Shiv kumar</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>8300</td>
                </tr>

              </table>
            </> : ""}

            {modal == 4 ? <>
              <table>
                <tr>
                  <td>Acount Holder Name</td>
                  <td>Sneh Jaiswal</td>
                </tr>
                <tr>
                  <td>Acount Number</td>
                  <td>494556164</td>
                </tr>
                <tr>
                  <td>Bank Name</td>
                  <td>HDFC Bank</td>
                </tr>
                <tr>
                  <td>Branch</td>
                  <td>Indore</td>
                </tr>
              </table>
            </> : ""}

            {modal == 5 ? <>
              <table>

              </table>
            </> : ""}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

    </>
  )
}

export default View
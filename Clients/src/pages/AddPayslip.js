import React from 'react'
import Card from 'react-bootstrap/Card';
import DataTable from 'react-data-table-component';

function AddPayslip() {
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    
    const columns = [
        {
            name: 'Serial',
            width: '100px !important',
            selector: (row, index) => index + 1,
        },

        {
            name: 'Employee Name',
            width: '160px !important',
            selector: row => row.title,
        },
        {
            name: 'Attendence Type',
            width: '160px !important',
            selector: row => row.title,
        }, {
            name: 'Manual Name',
            width: '160px !important',
            selector: row => row.title,
        },

        {
            name: 'Date',
            width: '100px !important',
            selector: row => "25-01-2023",
        },
        {
            name: 'Status',
            width: '160px !important',
            selector: row => (
                <>
                    <select id="cars" name="cars">
                        <option value="volvo">Absent</option>
                        <option value="saab">Present</option>
                        <option value="fiat">On Leave</option>

                    </select>
                </>
            )
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

        },]



    const customStyles = {

        headCells: {
            style: {

                width: '100px',
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
                textAlign: "left"
            },
        },
    };

    return (
        <>



            <Card>
             
                <Card.Body>
                    <Card.Title>Search Employee <hr /></Card.Title>
                    <Card.Text>
                        <div style={{ "display": "flex" }}>
                            <div className="Dep">
                                <label htmlFor="cars"> Department:</label><br />
                                <select id="cars" name="cars" style={{ "width": "150px" }}>
                                    <option value="volvo">All Employees</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="emp" style={{ "marginLeft": "50px" }}>
                                <label htmlFor="cars"> Employees:</label><br />
                                <select id="cars" name="cars" style={{ "width": "150px" }}>
                                    <option value="volvo">All Employees</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>


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
                                <button type="button" className="btn btn-success" style={{ "width": "200px" }}  >Show Reports</button>
                            </div>
                        </div>
                    </Card.Text>
                 
                </Card.Body>
            </Card>


            <Card>
                <Card.Body>
                    <Card.Title> <div className='atendenceHeader' >



                    </div></Card.Title>
                    <Card.Text>

                        <DataTable
                            columns={columns}
                            data={data}
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

                    </Card.Text>
                  
                </Card.Body>
            </Card>

        </>
    )
}

export default AddPayslip
import React from 'react'

function AttendenceReport() {

const month =[1,2,3,4,5,6,7,8,9,10,11,12]

    return (

        <>
            <div className='atendenceHeader' >
                <h4> Daily Atendence</h4><hr />
                <div style={{ "display": "flex" }}>
                    <div className="empDep">
                        <label htmlFor="cars"> Employee By Department:</label><br />
                        <select id="cars" name="cars" style={{"width":"200px"}}>
                            <option value="volvo">All Employees</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="yearBox" style={{ "marginLeft": "50px" }}>
                        <label htmlFor="year">Year :</label><br />
                        <select id="cars" name="cars" style={{"width":"150px"}}>
                            <option value="volvo">2023</option>
                            <option value="volvo">2024</option>
                            <option value="volvo">2025</option>

                            
                        </select>
                    </div>
                    <div className="monthBox" style={{ "marginLeft": "50px" }}>
                        <label htmlFor="cars">Month :</label><br />
                        <select id="cars" name="cars" style={{"width":"150px"}}>
                            {
                                month.map((val)=>{
                                    return   <option value={val}>{val}</option>
                                })
                            }
                          
                            
                        </select>
                    </div>
                    <div className="SubmitBtn" style={{ "marginLeft": "50px", "marginTop": "15px" }}>
                        <button type="button" className="btn btn-success" style={{ "width": "180px" }}  >Show Reports</button>
                    </div>
                </div>

            </div>

        </>

    )
}

export default AttendenceReport
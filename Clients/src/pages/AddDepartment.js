import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import Card from 'react-bootstrap/Card';


function AddDepartment() {

    const [refresh, setrefresh] = useState(false)


    useEffect(() => {

    }, [!refresh])



    return (
        <>
    
    <Card>

    <Card.Header>Create Deparment</Card.Header>
        <Card.Body>
          <Card.Text>
          <div className='AddDepartmentbox'>
                    <table>
                        <tr>
                            <td>Department*</td>
                            <td><input type="text" /></td>
                        </tr>

                        <tr>
                            <td>Designation*</td>
                            <td><input type="text" /> <button >+</button></td>
                        </tr>
                    </table>

                    {/* <hr /> */}
                    <div id="flexbox" style={{ "textAlign": "center", "gap": "5px" }}>
                        <div>
                            <button style={{ "flex": "1 1 auto" }} type="button" className="btn btn-light">Cancel</button>
                        </div>
                        <div>
                            <button style={{ "flex": "1 1 auto" }} type="button" className="btn btn-primary">Reset</button>
                        </div>
                        <div>

                            <button style={{ "flex": "1 1 auto" }} type="button" className="btn btn-success">Success</button>
                        </div>
                    </div>
                    {/* <hr /> */}


                </div>


          </Card.Text>

        </Card.Body>
      </Card>



               




        </>
    )
}

export default AddDepartment
import React, { useState, useEffect } from 'react';

function AddDepartment() {

    const [refresh, setrefresh] = useState(false)






    useEffect(() => {

    }, [!refresh])



    return (
        <>
            <div className='AddDepartment'>

                <h4>Create Department <hr /></h4>




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
                            <button style={{ "flex": "1 1 auto" }} type="button" class="btn btn-light">Cancel</button>
                        </div>
                        <div>
                            <button style={{ "flex": "1 1 auto" }} type="button" class="btn btn-primary">Reset</button>
                        </div>
                        <div>

                            <button style={{ "flex": "1 1 auto" }} type="button" class="btn btn-success">Success</button>
                        </div>
                    </div>
                    {/* <hr /> */}


                </div>





            </div>
        </>
    )
}

export default AddDepartment
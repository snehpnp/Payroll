import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';


const AddEmployee = () => {

  const [txt, setTxt] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    // console.log('Input value: ', value);

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  }
  return (
    <>
  
  <Card>    
  {/* <Card.Header><h3>Create Employees</h3></Card.Header> */}
  
        <Card.Body>
          <Card.Text>
          <div className="container">
        <div className="row" style={{"width":"100%"}}>

          {/* Personal Information */}
          <div className="col-sm-6 edit_information" >
            <div className="Account-details">
              <h3 className="text-left"> Personal Details</h3>
              <hr />
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">First Name:</label>
                    <input type="text" name="first_name" className="form-control" style={{ "textTransform": "capitalize" }} value={txt} onChange={onInputChange} placeholder="First Name" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Last Name: </label>
                    <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Mobile Number:</label>
                    <input type="tel" name="phone" className="form-control" placeholder="Mobile Number" pattern="[0-9]{10}" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Father Name:</label>
                    <input type="tel" name="phone" className="form-control" placeholder="Father Name" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Gender:</label>
                    <select name="gender" className="form-control" value required>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Date Of Birth:</label>
                    <input type="date" name="birthday" className="form-control" placeholder="Date Of Birth" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Phone 1:</label>
                    <input type="tel" name="phone" className="form-control" placeholder="Phone 1" pattern="[0-9]{10}" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Phone 2:</label>
                    <input type="tel" name="phone" className="form-control" placeholder="Phone 2" pattern="[0-9]{10}" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Local Address:</label>
                    {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Parmanent Address:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>


                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Nationality:</label>
                    <input type="text" name="nationality" className="form-control" placeholder="Nationality" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Refrence Phone 1:</label>
                    <input type="text" name="nationality" className="form-control" placeholder="Nationality" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Refrence Phone 2:</label>
                    <input type="text" name="nationality" className="form-control" placeholder="Nationality" />
                  </div>
                </div>
              </div> <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Martial Status:</label>
                    <input type="text" name="nationality" className="form-control" placeholder="Nationality" />
                  </div>
                </div>
              </div> <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Photo:</label>
                    <input type="text" name="nationality" className="form-control" placeholder="Nationality" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Who ?</label>
                    <input type="text" name="nationality" className="form-control" placeholder="Who Are you ?" />
                  </div>
                </div>
              </div>

              <br />

            </div>
            <br />

            <div className="Documents">

              <h3 className="text-left">Company Documents</h3>    <hr />

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Employee Id:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Department:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Designation:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Date Of Joining:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>   <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Status:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <br />

            </div>

          </div>

          {/* Account information */}
          <div className="col-sm-6 edit_information">

            <div className="Account-details">

              <h3 className="text-left">Account Details</h3>    <hr />

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Email:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Password:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Confirm Password:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <br />

            </div>
            <br />


            <div className="Company-details">

              <h3 className="text-left">Company Details</h3>    <hr />

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Employee Id:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Department:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Designation:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Date Of Joining:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>   <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Status:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <br />

            </div>

            <br />

            <div className="Account-details">

              <h3 className="text-left">Financial Details</h3>    <hr />

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Basic Salary:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group" style={{ "display": "flex" }}>
                    <div>
                      <label className="profile_details_text">HRA</label>
                      <input type="email" name="email" className="form-control" placeholder="Dduction :" />
                    </div>
                    <div>
                      <label className="profile_details_text">Amount:</label>
                      <input type="email" name="email" className="form-control" placeholder="Email Address" />

                    </div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group" style={{ "display": "flex" }}>
                    <div>
                      <label className="profile_details_text">HRA</label>
                      <input type="email" name="email" className="form-control" placeholder="Dduction :" />
                    </div>
                    <div>
                      <label className="profile_details_text">Amount:</label>
                      <input type="email" name="email" className="form-control" placeholder="Email Address" />

                    </div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Total Salary:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>
              <br />

            </div>


            <div className="Bank Account Details">

              <h3 className="text-left">Bank Account Details</h3>    <hr />

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Employee Id:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Department:</label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Designation:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Date Of Joining:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>   <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="profile_details_text">Status:</label>
                    <input type="text" name="monthly_income" className="form-control" placeholder="First Name" />
                  </div>
                </div>
              </div>
              <br />
            </div>


            <div className="Submit">

              <div className="row">
                <div className=" submit">
                  <div className="form-group">
                    <input type="submit" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 btn btn-success" />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
          </Card.Text>
        
        </Card.Body>
      </Card>

    


    </>
  )
};

export default AddEmployee;

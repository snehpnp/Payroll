import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideBar from "../components/Sidebar/SideBar";
import Navbar from "../components/Sidebar/Navbar";


import Dashboard from "../pages/Dashboard";

import AddEmployee from "../pages/AddEmployee";
import ManageEmployees from "../pages/ManageEmployee";
import View from "../pages/View";

import AddDepartment from "../pages/AddDepartment"; 
import ManageDepartment from "../pages/ManageDepartment";

import DailyAtendence from "../pages/DailyAtendence";
import AttendenceReport from "../pages/AttendenceReport";

import AddLeave from "../pages/AddLeave";
import ManageLeave from "../pages/ManageLeave";

import AddPayslip from "../pages/AddPayslip";
import PayslipList from "../pages/PayslipList";
function Wrapper() {
  return (
   <>
   
   
   
   <Router>
        <SideBar>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employee/add" element={<AddEmployee />} />
            <Route path="/employee/manage" element={<ManageEmployees />} />
            <Route path="/employee/view" element={<View />} />

            <Route path="/department/add" element={<AddDepartment />} />
            <Route path="/department/manage" element={<ManageDepartment />} />

            <Route path="/attendence/daily" element={<DailyAtendence />} />
            <Route path="/attendence/report" element={<AttendenceReport />} />

            <Route path="/leave/add" element={<AddLeave />} />
            <Route path="/leave/manage" element={<ManageLeave />} />

            <Route path="/payslip/add" element={<AddPayslip />} />
            <Route path="payslip/list" element={<PayslipList />} />
       



            <Route path="*" element={<> not found</>} />
          </Routes>
          </SideBar>
    
      </Router>
   
   
   </>
  )
}

export default Wrapper
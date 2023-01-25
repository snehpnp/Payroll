import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

const Dashboard = () => {
  const style = {

  }


  return (
    <>

      <div style={{
        backgroundColor: "red",
        height: "80px",
        width: "200px",
        textAlign: "center"
      }} >
        1 <FaUser style={{ marginLeft: "70px" }} />
        <p style={{marginTop:"40px"}}>Total Department</p>
      </div>
      <div style={{
        backgroundColor: "blue",
        height: "80px",
        width: "200px",
        textAlign: "center",
        // padding:"10px"
      }} >
        1 <FaUser style={{ marginLeft: "70px" ,height:"20px",width:"20px" }} />
        <p style={{marginTop:"40px"}}>Total Department</p>
      </div>
    </>
  )
};

export default Dashboard;

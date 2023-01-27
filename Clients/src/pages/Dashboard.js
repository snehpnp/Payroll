import '../dashboard.css'
const Dashboard = () => {
  const style = {

  }



  return (
    <>
      <div className="title"> Dashboard</div>;


      <div id="root">
        <div className="container pt-5">
          <div className="row align-items-stretch">


            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Deparments
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">4</span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total Employees
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">4</span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Present Today
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">4</span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">PAyslip This Month
                </h4><span className="hind-font caption-12 c-dashboardInfo__count">4</span>
              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  )
};

export default Dashboard;

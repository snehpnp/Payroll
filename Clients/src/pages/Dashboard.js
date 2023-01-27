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
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Portfolio Balance<svg
                  className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                  </path>
                </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">€10,500</span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Rental income<svg
                  className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                  </path>
                </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">€500</span><span
                  className="hind-font caption-12 c-dashboardInfo__subInfo">Last month: €30</span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Available funds<svg
                  className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                  </path>
                </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">€5000</span>
              </div>
            </div>
            <div className="c-dashboardInfo col-lg-3 col-md-6">
              <div className="wrap">
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Rental return<svg
                  className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                  </path>
                </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">6,40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
};

export default Dashboard;

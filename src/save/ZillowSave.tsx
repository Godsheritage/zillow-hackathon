import "./zillowSave.scss";
import Chart from "../shared/chart/Chart";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const ZillowSave = () => {


  return (
    <div>
      <MainNavigation />
      <div className="dashboard d-flex flex-column ">
        <div className="dashboard-info">
          <h1 className="h4">Total Z-Save Amount</h1>
          <div className="dashboard-sub-info">
            <h1 className="h4" style={{ color: "#0B5ED7" }}>
              $20,000
            </h1>
            <button className="btn btn-primary">Manage Account</button>
          </div>
        </div>
      </div>
      <Chart/>
    </div>
  );
};

export default ZillowSave;

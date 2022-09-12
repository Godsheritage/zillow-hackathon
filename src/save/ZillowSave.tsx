import "./zillowSave.scss";
import Chart from "../shared/chart/Chart";
import { data } from "../shared/chart/Chart";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const ZillowSave = () => {
  return (
    <div>
      <MainNavigation />
      <div className="dashboard d-flex flex-column ">
        <div className="dashboard-info mt-5">
          <h1 className="mb-3">Total Z-Save Amount</h1>
          <div className="dashboard-sub-info">
            <p className="h4" style={{ color: "#0B5ED7" }}>
              $20,000
            </p>
            <button className="btn btn-primary">Manage Account</button>
          </div>
        </div>
      </div>
      <div className=" chart-styles">
        <Chart />
        <div className="d-flex">
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <ul>
            {data.map((item, index) => (
              <li key={index}>${item.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ZillowSave;

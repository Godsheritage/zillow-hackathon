import "./zillowSave.scss";
import Chart from "../shared/chart/Chart";
import fireIcon from "../shared/images/fire.png";
import calendarIcon from "../shared/images/calendar.png";
import house1 from "../shared/images/house1.jpg";
import house2 from "../shared/images/house2.jpg";
import house3 from "../shared/images/house3.jpg";
import { data } from "../shared/chart/Chart";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const ZillowSave = () => {
  return (
    <div>
      <MainNavigation />
      <div className="dashboard d-flex flex-column ">
        <div className="dashboard-info">
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
              <li className="h5" key={index}>
                {item.name}
              </li>
            ))}
          </ul>
          <ul>
            {data.map((item, index) => (
              <li className="h5" key={index}>
                ${item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* flex boxes section */}

      <div className="stats-box">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={fireIcon}
            alt="fire icon"
            style={{ height: "3rem", width: "3rem" }}
          />
          <p>8 Months</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p>1%</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={calendarIcon}
            alt="fire icon"
            style={{ height: "3rem", width: "3rem" }}
          />
          <p>Sept 3rd</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p>25%</p>
        </div>
      </div>
      <hr className="my-3"/>

      {/* Carousel section */}

      <h1 className="h4 text-center">
        Potential Homes to check out based on your Z-save activity{" "}
      </h1>
    </div>
  );
};

export default ZillowSave;

import "./zillowSave.scss";
import Chart from "../shared/chart/Chart";
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
      {/* flex boxes section */}
      <div className="stats-box">
        <div className="d-flex justify-content-center align-items-center">
          <p>8 Months</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p>1%</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p>Sept 3rd</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p>25%</p>
        </div>
      </div>

      <hr />

      {/* Carousel section */}

      <h1>Potential Homes to check out based on your Z-save activity </h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" style={{height:'30rem', width:'30rem'}} src={house1} alt="First slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={house2} alt="Second slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={house3} alt="Third slide"></img>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default ZillowSave;

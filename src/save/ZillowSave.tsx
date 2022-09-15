import "./zillowSave.scss";
import { Link } from "react-router-dom";
import Chart from "../shared/chart/Chart";
import Bullet from "../shared/bullets/Bullet";
import { data } from "../shared/chart/Chart";
import fireIcon from "../shared/images/fire.png";
import DemoCarousel from "../shared/carousel/Carousel";
import calendarIcon from "../shared/images/calendar.png";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const ZillowSave = () => {
  return (
    <div>
      <MainNavigation />
      <div className="dashboard d-flex flex-column ">
        <div className="dashboard-info">
          <h1 className="mb-3">Total Z-Save Amount</h1>
          <div className="dashboard-sub-info">
            <a href="https://www.zillow.com/mortgage-calculator/">
              <button className="btn btn-primary btn-1">
                Mortgage Calculator
              </button>
            </a>
            <p className="h4" style={{ color: "#0B5ED7" }}>
              $20,000
            </p>
            <Link to="/account">
              <button className="btn btn-primary btn-2">Manage Account</button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" chart-styles">
        <Chart />
        <div className="d-flex">
          <ul>
            {data.map((item, index) => (
              <div className="d-flex align-items-center">
                <Bullet color={item.color} />
                <li className="h5 ps-2" key={index}>
                  {item.name}
                </li>
              </div>
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

      <div className="stats-box ">
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={fireIcon}
              alt="fire icon"
              style={{ height: "3rem", width: "3rem" }}
            />
            <p>8 Months</p>
          </div>
          <p
            className="h3 text-center"
            style={{ color: "black", fontSize: "18px" }}
          >
            Deposit Streak
          </p>
        </div>
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <p>1%</p>
          </div>
          <p
            className="h3 text-center"
            style={{ color: "black", fontSize: "18px" }}
          >
            Qualified Percentage for cashbacks
          </p>
        </div>
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={calendarIcon}
              alt="fire icon"
              style={{ height: "3rem", width: "3rem" }}
            />
            <p>Sept 3rd</p>
          </div>
          <p
            className="h3 text-center"
            style={{ color: "black", fontSize: "18px" }}
          >
            Next deposit date
          </p>
        </div>
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <p>25</p>
          </div>
          <p
            className="h3 text-center"
            style={{ color: "black", fontSize: "18px" }}
          >
            Z-Score
          </p>
        </div>
      </div>
      <hr />

      {/* Carousel section */}
      {/* <div className="mb-5">
        <h1 className="h4 text-center">
          Potential Homes to check out based on your Z-save activity{" "}
        </h1>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={house1}
                className="d-block w-100 img-fluid "
                style={{ height: "30rem", width: "30rem" }}
                alt="..."
              ></img>
              <p className="h1">Hello</p>
            </div>
            <div className="carousel-item">
              <img
                src={house2}
                className="d-block w-100 img-fluid "
                style={{ height: "30rem", width: "30rem" }}
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={house3}
                className="d-block w-100 img-fluid "
                style={{ height: "30rem", width: "30rem" }}
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
      <h1 className="h4 text-center mb-4">
        Potential Homes to check out based on your Z-save activity{" "}
      </h1>
      <DemoCarousel />
    </div>
  );
};

export default ZillowSave;

import "./account.scss";
import payImg from "../shared/images/pay.png";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const Account = () => {
  return (
    <>
      <MainNavigation />
      <div className="user-account">
        <div className="d-flex justify-content-evenly">
          <div className="user-image"></div>
          <div className="d-flex flex-column justify-content-center ">
            <h5>
              {" "}
              <strong>First name:</strong>
              <span style={{ marginLeft: "2rem" }}>Theodore </span>
            </h5>
            <h5>
              <strong>Last name:</strong>
              <span style={{ marginLeft: "2rem" }}>Westinghouse</span>
            </h5>
            <h5>
              <strong>Z-Save Age:</strong>
              <span style={{ marginLeft: "2rem" }}>1 year 6 months</span>
            </h5>
            <h5>
              <strong>Location:</strong>
              <span style={{ marginLeft: "2rem" }}>Chicago </span>
            </h5>
          </div>
        </div>
        <div>
          <h4 style={{ color: "#1277E1" }} className="text-center my-4">
            Manage Expenses
          </h4>
          <div className="d-flex justify-content-evenly">
            <div className="d-flex flex-column align-content-center">
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div className="d-flex flex-column">
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <img src={payImg} style={{height:'40px', width:'200px'}} alt="apple-pay-img" className="my-5" />
        </div>
      </div>
    </>
  );
};

export default Account;

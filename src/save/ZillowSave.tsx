import "./zillowSave.scss";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const ZillowSave = () => {
  const data = [
    { name: "Principal and Interest", value: 1100 },
    { name: "Home Insurance", value: 600 },
    { name: "Taxes", value: 600 },
    { name: "Mortgage Insurance", value: 200 },
  ];

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
    </div>
  );
};

export default ZillowSave;

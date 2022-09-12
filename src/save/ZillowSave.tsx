import "./zillowSave.scss";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const ZillowSave = () => {
  return (
    <div className="dashboard">
      <MainNavigation />
      <h1 className="h4">Total Z-Save Amount</h1>
      <div className="d-flex ">
        <h1 className="h5" color="#0B5ED7">$20,000</h1>
        <button className="btn btn-primary">Manage Button</button>
      </div>
    </div>
  );
};

export default ZillowSave;

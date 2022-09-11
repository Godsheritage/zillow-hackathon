import "./home.scss";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const Home = () => {
  
  return (
    <div className="home">
      <MainNavigation />
      <div>
        <div className="family-page"></div>
        <div className=" home-text">
          <h1 className="pb-5">
            "Had a rough start to building credit? Try out Z-Save and grow your
            wallet to further qualify you for your dream home"
          </h1>
          <button className="btn btn-primary btn-lg px-5 ">Try Z-Save!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

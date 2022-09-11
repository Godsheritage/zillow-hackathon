import "./home.scss";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";
import family from "../shared/images/family.jpg";

const Home = () => {
  return (
    <div>
      <MainNavigation />
      {/* <img src={family} alt="family.jpg" /> */}   
      <div className="family-page" ></div>
    </div>
  );
};

export default Home;

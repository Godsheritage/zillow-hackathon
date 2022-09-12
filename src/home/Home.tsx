import "./home.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import MainNavigation from "../shared/navigation/main navigation/MainNavigation";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="home">
      <MainNavigation />
      <div>
        <div className="family-page"></div>
        {isLogin && (
          <div className="drawer">
            <h1>welcome to zillow</h1>
            <div>
              <div className="drawer-login">
                <p onClick={() => setIsSignUp(false)}>Sign In </p>
                <p onClick={() => setIsSignUp(true)}>New Account </p>
              </div>
              <hr />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="password">Password</label>
              <input type="password" />
            </div>
            {!isSignUp && (
              <Link to="/zsave">
                <button
                  className="btn btn-primary px-5"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Sign In
                </button>
              </Link>
            )}

            {isSignUp && (
              <Link to="/zsave">
                <button
                  className="btn btn-primary px-5"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Create Account
                </button>
              </Link>
            )}
            <p>forgot password</p>
          </div>
        )}

        {!isLogin && (
          <div className=" home-text">
            <h1 className="pb-5">
              "Had a rough start to building credit? Try out Z-Save and grow
              your wallet to further qualify you for your dream home"
            </h1>
            <button
              className="btn btn-primary btn-lg px-5"
              onClick={() => setIsLogin(true)}
            >
              Try Z-Save!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

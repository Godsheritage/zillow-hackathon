import "./navlinks.scss";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { contextTypes } from "../../../types";
import userImg from "../../../shared/images/me.jpg";
import image from "../../../shared/images/logo.png";
import ZillowContext from "../../context/ZillowContext";

const NavLinks: React.FC<any> = () => {
  const { isLoggedIn, setIsLogin } = useContext(ZillowContext) as contextTypes;
  return (
    <div className="nav-bar">
      <ul className="nav-links">
        <li>Buy</li>
        <li>Rent</li>
        <li>Sell</li>
        <li>Home loans</li>
        <li>Rent Finder</li>
      </ul>
      <Link to="/">
        <img
          src={image}
          alt="zillow-logo"
          style={{ height: "5rem", width: "8rem" }}
        />
      </Link>
      <ul className="nav-links">
        <li>Advertise</li>
        <li>Manage Rentals</li>
        <li>Help</li>
        {!isLoggedIn ? (
          <li
          style={{cursor:'pointer'}}
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Sign In
          </li>
        ) : (
          <img
            src={userImg}
            alt="userPic"
            style={{ height: "22px", width: "22px", borderRadius: "50%" }}
            className="mx-3"
          ></img>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;

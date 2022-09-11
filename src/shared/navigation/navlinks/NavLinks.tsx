import React from "react";
import "./navlinks.scss";
// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";
// import { contextTypes } from "../../../types";
// import { contextTypes } from "../../types";
// import AuthContext from "../context/AuthContext";

const NavLinks: React.FC<any> = ({ onClick }) => {
  // const { isLoggedIn, logout } = useContext(AuthContext) as contextTypes;
  return (
    <ul className="nav-links">
      <li onClick={onClick}>
        <NavLink to="/">Buy</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/">Rent</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/">Sell</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/">Home loans</NavLink>
      </li>
      <li>
        <NavLink to="/">Agent Finder</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

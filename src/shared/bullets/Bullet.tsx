import React from "react";
import "./bullet.scss";

const Bullet: React.FC<any> = ({color}) => {
  return <div className="bullet" style={{ backgroundColor: color }}></div>;
};

export default Bullet;

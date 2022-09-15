import React, { Component } from "react";
import "./carousel.scss";
import house1 from "../../shared/images/house1.jpg";
import house2 from "../../shared/images/house2.jpg";
import house3 from "../../shared/images/house3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={house1} alt="houses" />
          <p className="legend img-txt" style={{}}>
            {" "}
            Candidacy: Strong Candidate
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="houses"
          />
          <p className="legend img-txt" style={{}}>
            {" "}
            Candidacy: Strong Candidate
          </p>
        </div>
        <div>
          <img src={house3} alt="houses" />
          <p className="legend img-txt" style={{}}>
            {" "}
            Candidacy: Strong Candidate
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1278&q=80"
            alt="houses"
          />
          <p className="legend img-txt">Candidacy Strong Candidate</p>
        </div>
        <div>
          <img src={house3} alt="houses" />
          <p className="legend img-txt">Candidacy Strong Candidate</p>
        </div>
        <div>
          <img src={house3} alt="houses" />
          <p className="legend img-txt">Candidacy Strong Candidate</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;

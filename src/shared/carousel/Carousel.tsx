import "./carousel.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DemoCarousel: React.FC = () => {
  const housesInfo = [
    {
      img: "https://media.istockphoto.com/photos/two-story-house-exterior-with-front-yard-landscape-picture-id516810107?k=20&m=516810107&s=612x612&w=0&h=-bqMF_hSI34WryvocIUD3ZCYuW1aQglISsrRckDcKvY=",
      address: " 156 Springfield Lane, Baltimore MD 21215",
      price: "$472,000",
      candidacy: "Strong Candidate",
    },
    {
      img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      address: " 156 Springfield Lane, Baltimore MD 21215",
      price: "$472,000",
      candidacy: "Strong Candidate",
    },
    {
      img: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1278&q=80",
      address: " 156 Springfield Lane, Baltimore MD 21215",
      price: "$472,000",
      candidacy: "Strong Candidate",
    },
    {
      img: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      address: " 156 Springfield Lane, Baltimore MD 21215",
      price: "$472,000",
      candidacy: "Strong Candidate",
    },
    {
      img: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      address: " 156 Springfield Lane, Baltimore MD 21215",
      price: "$472,000",
      candidacy: "Strong Candidate",
    },
    {
      img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      address: " 156 Springfield Lane, Baltimore MD 21215",
      price: "$472,000",
      candidacy: "Strong Candidate",
    },
  ];
  return (
    <Carousel>
      {housesInfo.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="houses" />
          <p
            className="legend img-txt bg-transparent text-dark"
            style={{ fontSize: "1.5rem", position: "relative", top: "1.2rem" }}
          >
            <strong>
              {" "}
              {item.address}
              <br />
              {item.price}
              <br />
              Candidacy: <span className="text-success">{item.candidacy}</span>
            </strong>
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;

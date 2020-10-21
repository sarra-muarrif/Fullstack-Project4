//import react
import React from "react";
//import Link
import { Link } from "react-router-dom";

//import image
import heroimg from "../img/hero.png";

//create react
const Hero = () => {
  return (
    <section className=" hero">
      <div className="container">
        <div className="hero-img">
          <img src={heroimg} alt="heroimg" />
        </div>
        <div className="hero-description">
          <h1>lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            ultrices magna mauris pellentesque dignissim ante varius diam elit.
          </p>
          <Link to={"/collection"} className="button our-products">
            our products
          </Link>
        </div>
      </div>
    </section>
  );
};

//exports react
export default Hero;

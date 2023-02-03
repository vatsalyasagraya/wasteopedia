import React from "react";
import "./home.css";
import ic1 from '../images/ic1.jpg' 
import ic2 from '../images/ic2.jpg' 
import ic3 from '../images/ic3.png' 
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import { Carousel } from 'react-responsive-carousel';


export const Home = () => {
  return (

    <div id="Home">
    <Carousel showThumbs={false} showStatus={false} className="slider-container">
      <div>
        <div className="grad1"></div>
        <img className="image" src={ic3} alt="1" />
        <p className="para1">Let’s start saving food!</p>
          
      </div>
      <div>
          <div className="grad2"></div>
          <img src={ic2} className="image" alt="1"/>
          <p className="para2"> Cutting global food waste by just a quarter will save enough food for everyone on planet.</p>
      </div>
      <div>
      <div className="grad1"></div>
        <img className="image" src={ic1} alt="1" />
        <p className="para3">Let us together reduce the amount of food waste generated.</p>
      </div>
    </Carousel>
    </div>
  );
};

export default Home;
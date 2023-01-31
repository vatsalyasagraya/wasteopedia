import React from "react";
import "./about.css"
import img1 from './images/img1.png'
export const About = () => {
  return (
    <div id="About" className="about">
      <h1>About Us</h1>
      <hr/>
      <div className='body'>
        <img src={img1} alt="noting" className='photo'/>
        <p className='text'>Every day, delicious fresh food goes to waste at restaurants, cafes, hotels, supermarkets, shops, and manufacturers just because it hasn’t sold in time. Our mission is to let customers buy fresh food at a great price -directly from businesses.</p>
      </div>
    
    </div>
  );
};

export default About;

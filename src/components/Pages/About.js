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
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam quos delectullam voluptatum facilis sunt, corrupti nihil beatae tenetur voluptatibus magnam omnis, earum velit voluptatem ad illum ex molestiae! Necessitatibus pariatur veritatautem quo facere nam nostrum beatae! Lorem ipsum dolor sit amet, consectetur adipisicielit. Eligendi commodi minima iste pariatur! Provident repellat suscipit maxime itaqtenetur explicabo? </p>
      </div>
    
    </div>
  );
};

export default About;

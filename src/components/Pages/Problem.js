import React from "react";
import img2 from './images/img2.png';
import "./problem.css"


export const Problem = () => {
  return (
    <div id="Problem" className="problem">
      <h1>Problem</h1>
      <hr/>
      <div className="box">
            <div className="box1">
                
                <p className="para"><span className="main">The economic loss of food waste costs India <b>$12 Billion.</b></span>
                <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odit est doloribus eligendi omnis eum facere deserunt beatae vitae vel? Modi ullam quibusdam totam! Maxime corporis eaque, expedita quae beatae reprehenderit? Consectetur labore maiores necessitatibus  quibusdam velit sunt molestiae iure nam recusandae vero corrupti dicta alias, molestias, voluptates quae eos!</p>
            </div>

            <div className="badi">
                <img className="ind" src={img2} alt="alt"/>
            </div>
            
        </div>
    </div>
  );
};

export default Problem;
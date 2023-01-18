import React from "react";
import "./solution.css"
import img3 from './images/img3.png'

export const Solution = () => {
  return (
    <div id="Solution" className="solution">
      <h1>Solution</h1>
      <hr/>
      <div className='first'>
            <img src={img3} alt="nothin" className="photo-sol"/>
            <div className="text-sol">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptatum, ipsam aliquam neque odio dolorem fugiat sit ut maiores necessitatibus deleniti excepturi rem pariatur magni eos possimus voluptas provident, dolores facilis natus. Laboriosam dicta minus hic adipisci laborum recusandae dolor.</p>
            </div>
        </div>
        <div className="button">
        <div class="wrapper">
          <a href="/"><span>Hover Me!</span></a>
        </div>
        <div class="wrapper">
          <a href="/"><span>Hover Me!</span></a>
        </div>
        </div>
    </div>
  );
};

export default Solution;
import React from 'react'
import {settings, arrayImage} from './data';
import Slider from "react-slick";
import './navbar.sass';

function Navbar(){
  return (
    <div className="navbar">
      <Slider {...settings}>
        {arrayImage.map((img, index)=>{
          return(
            <div className="navbar__carrousel" key={index}>
              <img src={img}></img>
            </div>
            )})}
      </Slider>
    </div>
  );
}

export default Navbar

import React from 'react'
import {settings, arrayImage} from './data';
import Slider from "react-slick";
import './navbar.sass';

function Navbar(){
  return (
    <div className="navbar">
      <div className="navbar__title">
        <h1 className="navbar__title__text">React Movies</h1>
      </div>
      <Slider {...settings}>
        {arrayImage.map((img, index) => {
          return (
            <div className="navbar__carrousel" key={index}>
              <img alt="img_navbar" src={img}></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Navbar

import React from 'react';
import { settings, arrayImage } from "./data";
import Slider from "react-slick";
import './header.sass';

function Header() {
  return (
    <div className="header">
      <Slider {...settings}>
        {arrayImage.map((img, index) => {
          return (
            <div className="header__carrousel" key={index}>
              <img alt="img_header" src={img}></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Header

import React from "react";
import "./HeroStyles.css";

import Video from "../../assets/0be9b123-d00bc462.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;

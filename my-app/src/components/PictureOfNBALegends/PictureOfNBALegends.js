import React from "react";
import "./PictureOfNBALegends.css";
import nbaLegendsImage from "./nbaLegendsImage.jpeg"; // Path to your image

function PictureOfNBALegends() {
  return (
    <div className="picture-of-nba-legends">
      <img src={nbaLegendsImage} alt="NBA Legends" />
      {/* Additional content can go here */}
    </div>
  );
}

export default PictureOfNBALegends;

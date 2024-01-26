import React from "react";
import "./SimpleDescription.css";
import logo from "./nbazone.png";

function SimpleDescription() {
  return (
    <div className="simple-description">
      <img src={logo} alt="NBA Zone Logo" className="logo" />
      <h1>What is NBA Zone?</h1>
      <p>We are a community full of NBA fans that love to talk ball!</p>
    </div>
  );
}

export default SimpleDescription;

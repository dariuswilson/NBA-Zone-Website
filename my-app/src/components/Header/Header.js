import React from "react";
import "../../App.css";
import "./Header.css";
import logo from "./nbazone.png";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="NBA Zone Logo" className="logo" />
          <h1>NBA Zone Website</h1>
        </div>
        <nav className="navigation">
          <button className="header-button">Home</button>
          <a href="https://discord.gg/nbachat" rel="noreferrer" target="_blank">
            <button className="header-button">Discord</button>
          </a>
          <button className="header-button">Staff</button>
          <button className="header-button">Appeals</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

// Header.js
import React from "react";
import "./Header.css";
import logo from "./nbazone.png"; // Your logo path
import discordIcon from "./discordlogo.png"; // Your discord icon path

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="NBA Zone Logo" className="logo" />
      </div>
      <nav className="navigation">
        <button className="nav-button">Home</button>
        <button className="nav-button">NBA Live</button>
        <button className="nav-button">NBA Scores</button>
        <button className="nav-button">NBA Legends</button>
        <button className="nav-button">NBA Merch</button>
      </nav>
      <a
        href="https://discord.gg/nbazone"
        className="join-discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={discordIcon} alt="Discord" />
        <span>JOIN DISCORD</span>
      </a>
      <div className="header-title">NBA LEGENDS</div>
    </header>
  );
}

export default Header;

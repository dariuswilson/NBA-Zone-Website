import React from "react";
import "./Footer.css";
import logo from "./nbazone.png";
import discordIcon from "./discordlogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={logo} alt="NBA Zone" className="logo" />
      </div>
      <nav className="menu">
        <button className="nav-button">HOME</button>
        <button className="nav-button">GAME NIGHTS</button>
        <button className="nav-button">NBA SCORES</button>
        <button className="nav-button">NBA STREAM</button>
      </nav>
      <a
        href="https://discord.gg/nbachat"
        target="_blank"
        rel="noreferrer"
        className="join-discord"
      >
        <img src={discordIcon} alt="Join Discord" />
        <span>JOIN DISCORD</span>
      </a>
      <div className="footer-legal">
        <p>© 2024 NBA Zone Discord. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

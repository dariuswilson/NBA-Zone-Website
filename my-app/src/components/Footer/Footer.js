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
        <a href="/nba-stream">
          <span>NBA STREAM</span>
        </a>
        <a href="/">
          <span>HOME</span>
        </a>
        <a href="/game-nights">
          <span>GAME NIGHTS</span>
        </a>
        <a href="/nba-scores">
          <span>NBA SCORES</span>
        </a>
      </nav>
      <a href="https://discord.gg/nbazone" className="join-discord">
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

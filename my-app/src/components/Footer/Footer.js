// Footer.js
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="https://discord.gg/nbachat">Discord</a>
          <a href="/">Edit</a>
          {/* More links as needed */}
        </div>
        <div className="footer-contact">
          <p>Contact us at: nbazonediscord@gmail.com</p>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.tiktok.com/@nbatrends_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/swishundisputed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://twitter.com/nbaTrends_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://discord.gg/nbachat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
        <div className="footer-legal">
          <p>© 2024 NBA Zone Discord. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

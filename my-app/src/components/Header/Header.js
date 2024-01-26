import React from "react";
import "../../App.css"; // Assuming this contains global styles
import "./Header.css"; // This will contain your new header styles

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>NBA Zone Website</h1>
          {/* Add an image tag for your logo here if you have one */}
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

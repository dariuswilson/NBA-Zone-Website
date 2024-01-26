import React from "react";
import "./ServerDescription.css";

function ServerDescription() {
  return (
    <div className="server-description">
      <h2>Just your typical NBA Discord Server</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Server Member Count:</h3>
          <p>24,000+</p>
        </div>
        <div className="stat-card">
          <h3>Message Today:</h3>
          <p>8,000+</p>
        </div>
      </div>
    </div>
  );
}

export default ServerDescription;

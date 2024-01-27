import React, { useState, useEffect } from "react";
import "./ServerDescription.css";

function ServerDescription() {
  const [activeCard, setActiveCard] = useState("memberCount");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);

      setTimeout(() => {
        setActiveCard((prevActiveCard) =>
          prevActiveCard === "memberCount" ? "messageToday" : "memberCount"
        );
        setFadeOut(false);
      }, 1000); //fadeOut timeout
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="server-description">
      <h2>Not your typical NBA Discord Server</h2>
      <div className="stats-container">
        {activeCard === "memberCount" && (
          <div className={`stat-card ${!fadeOut ? "fade-in" : "fade-out"}`}>
            <h3>Server Member Count:</h3>
            <p>24,000+</p>
          </div>
        )}
        {activeCard === "messageToday" && (
          <div className={`stat-card ${!fadeOut ? "fade-in" : "fade-out"}`}>
            <h3>Message Today:</h3>
            <p>8,000+</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServerDescription;

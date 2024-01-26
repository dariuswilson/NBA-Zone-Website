import React from "react";
import "./AboutUs.css"; // Make sure this path is correct

function AboutUs() {
  return (
    <div className="about-us">
      <h2>Join the NBA Zone Discord Server!</h2>
      <p>
        Every day, users discuss over thousands of NBA topics on our server. Why
        don't you join the conversation?
      </p>
      <div className="feature-container">
        <div className="feature-card">
          <h3>Always Active</h3>
          <p>Chat live 24/7 with NBA fans around the world.</p>
        </div>
        <div className="feature-card">
          <h3>Game Nights</h3>
          <p>Join game night events and watch parties during NBA season.</p>
        </div>
        <div className="feature-card">
          <h3>Knowledgeable Members</h3>
          <p>Learn more about the game from experienced fans and analysts.</p>
        </div>
        <div className="feature-card">
          <h3>Inclusive Community</h3>
          <p>
            A welcoming place for fans of all teams and levels of knowledge.
          </p>
        </div>
        <div className="feature-card">
          <h3>Live Streams</h3>
          <p>
            We have a partnership with Playback which allows <b>YOU</b> to watch
            NBA Streams with us for FREE! Don't Miss Out! Join in on the fun!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

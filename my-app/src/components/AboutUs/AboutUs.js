// AboutUs.js
import React from "react";
import "./AboutUs.css";
import lbj from "./lbj.png";
import jt from "./jt.png";
import trae from "./trae.png";
import wemby from "./wemby.png";
import westbrook from "./westbrook.png";

function AboutUs() {
  return (
    <div className="about-us">
      <h2>Join the NBA Zone Discord Server!</h2>
      <p>
        Every day, users discuss thousands of NBA-related topics on our server.
        Ready to join the conversation?
      </p>
      <div className="feature-container">
        <div className="feature-card">
          <img src={lbj} alt="Always Active" />
          <div>
            <h3>Always Active</h3>
            <p>Chat live 24/7 with NBA fans around the world.</p>
          </div>
        </div>
        <div className="feature-card">
          <img src={westbrook} alt="Game Nights" />
          <div>
            <h3>Game Nights</h3>
            <p>
              Join game night events and watch parties during the NBA season
            </p>
          </div>
        </div>
        <div className="feature-card">
          <img src={jt} alt="Knowledgeable Members" />
          <div>
            <h3>Knowledgeable Members</h3>
            <p>Learn more about the game from experienced fans and analysts.</p>
          </div>
        </div>
        <div className="feature-card">
          <img src={trae} alt="Inclusive Community" />
          <div>
            <h3>Inclusive Community</h3>
            <p>A welcoming place for fans of all teams and knowledge-levels.</p>
          </div>
        </div>
        <div className="feature-card">
          <img src={wemby} alt="Live Streams" />
          <div>
            <h3>Live Streams</h3>
            <p>
              We have a partnership with Playback which allows <b>YOU</b> to
              watch NBA Streams with us for FREE! Don't Miss Out! Join in on the
              fun!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

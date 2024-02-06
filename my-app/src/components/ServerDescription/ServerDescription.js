// ServerDescription.js
import React from "react";
import "./ServerDescription.css";
import basketballImage from "./nba court.jpg"; // Update with the path to your image
import discordIcon from "../Header/discordlogo.png"; // Make sure the path is correct

function ServerDescription() {
  return (
    <section className="server-description">
      <div className="text-content">
        <h2>24,000+ Members</h2>
        <p>
          NBA Zone is a NBA forum with currently 24,000+ members and counting.
          The NBA discord server is super active and you can join the server for
          free! NBA forum gives you access to live streams, game nights,
          merchandise, and ability to chat with NBA fans around the world 24x7.
          We are an inclusive community and provide basketball fans an awesome
          place to hangout.
        </p>
        <a href="https://discord.gg/nbazone" className="join-discord-button">
          <img src={discordIcon} alt="Discord" className="discord-logo" /> JOIN
          24,000+ MEMBERS ON DISCORD
        </a>
      </div>
      <div className="image-content">
        <img src={basketballImage} alt="Basketball Action" />
        <blockquote>"Alive, Active, & Ever Growing Community!"</blockquote>
      </div>
    </section>
  );
}

export default ServerDescription;

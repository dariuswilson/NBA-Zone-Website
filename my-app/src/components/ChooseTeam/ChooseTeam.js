import React from "react";
import "./ChooseTeam.css";
import nbateams from "./nbateams.png"; // Update with the path to your TV image
import discordlogo from "../Header/discordlogo.png"; // Update with the path to your stream icon

function ChooseTeam() {
  return (
    <section className="choose-team">
      <div className="choose-team-image-content">
        <img src={nbateams} alt="Basketball on TV" />
        <blockquote className="choose-team-blockquote">
          "Dynamic, Competitive, Agile, Iconic..."
        </blockquote>
      </div>
      <div className="choose-team-text-content">
        <h2>Choose Your Team</h2>
        <p>
          Warriors, Lakers, Bucks, Nets, Celtics, Bulls, Cavaliers, New York
          Knicks, or Atlanta Hawks? Who do you support and why? What connects
          you with them? Which values resonate with you? What was the moment
          that made you love that team and not any other? Join in and tell us
          your story. We are waiting to hear from you! See you on the other
          side!
        </p>
        <a
          href="https://discord.gg/nbachat"
          target="_blank"
          rel="noreferrer"
          className="choose-team-get-access-button"
        >
          <img
            src={discordlogo}
            alt="Stream"
            className="choose-team-discord-logo"
          />
          JOIN DISCORD & CHOOSE YOUR TEAM
        </a>
      </div>
    </section>
  );
}

export default ChooseTeam;

import React from "react";
import "./AccessNBAStreams.css";
import tvImage from "./tv-image.jpg"; // Update with the path to your TV image
import discordlogo from "../Header/discordlogo.png"; // Update with the path to your stream icon

function AccessNBAStreams() {
  return (
    <section className="access-nba-streams">
      <div className="access-nba-streams-image-content">
        <img src={tvImage} alt="Basketball on TV" />
        <blockquote className="access-nba-streams-blockquote">
          "Stream anytime, anywhere, any place!"
        </blockquote>
      </div>
      <div className="access-nba-streams-text-content">
        <h2>NBA Streams</h2>
        <p>
          Welcome to NBA Zone’s exclusive platform, where basketball enthusiasts
          can elevate their NBA experience to new heights. Gain unrestricted
          access to high-quality NBA streams, bringing the courtside excitement
          directly to your screen. Immerse yourself in the thrilling world of
          NBA action with our user-friendly interface.
        </p>
        <a
          href="https://discord.gg/nbachat"
          className="access-nba-streams-get-access-button"
        >
          <img
            src={discordlogo}
            alt="Stream"
            className="access-nba-streams-discord-logo"
          />
          GET FREE ACCESS TO NBA STREAMS
        </a>
      </div>
    </section>
  );
}

export default AccessNBAStreams;

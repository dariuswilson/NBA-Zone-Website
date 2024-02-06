import React from "react";
import "./GameNights.css";
import dame from "./dame.jpeg"; // Update with the path to your TV image
import jokic from "./jokic.jpeg";
import discordlogo from "../Header/discordlogo.png"; // Update with the path to your stream icon

function GameNights() {
  return (
    <section className="game-nights">
      <div className="game-nights-image-content">
        <img src={jokic} alt="jokic" className="second-image" />
        <img src={dame} alt="dame" className="first-image" />
        <blockquote className="game-nights-blockquote">
          "Thrilling, Entertaining, Exciting!!!"
        </blockquote>
      </div>
      <div className="game-nights-text-content">
        <h2>Game Nights</h2>
        <p>
          Join game night events and watch parties during the NBA season. NBA
          game nights are a thrilling and communal experience for basketball
          enthusiasts, offering a unique blend of competition, entertainment,
          and camaraderie. Fans eagerly anticipate these special occasions
          during the NBA season, and many choose to join game night events and
          watch parties to amplify the excitement.
        </p>
        <a
          href="https://discord.gg/nbachat"
          target="_blank"
          rel="noreferrer"
          className="game-nights-get-access-button"
        >
          <img
            src={discordlogo}
            alt="Stream"
            className="game-nights-discord-logo"
          />
          JOIN NBA GAME NIGHTS
        </a>
      </div>
    </section>
  );
}

export default GameNights;

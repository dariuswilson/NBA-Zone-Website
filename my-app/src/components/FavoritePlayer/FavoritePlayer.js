import React from "react";
import "./FavoritePlayer.css";
import nbalegends from "./nbalegends.jpg"; // Update with the path to your image
import discordIcon from "../Header/discordlogo.png"; // Make sure the path is correct

function FavoritePlayer() {
  return (
    <section className="favorite-player">
      <div className="favorite-player-text-content">
        <h2>Who's Your Favorite?</h2>
        <p>
          Stephen Curry, LeBron James, James Harden, Russell Westbrook, Kawhi
          Leonard, Kobe Bryant, Damian Lillard, or Michael Jordan? Who’s your
          favorite player? Who do you love the most and why? Was it their
          personal story you connected with? Or their performance in the game?
          What’s your most memorable moment for that player? Get in and tell us
          all about it... there are so many like you on the inside!
        </p>
        <a
          href="https://discord.gg/nbazone"
          className="favorite-player-join-discord-button"
        >
          <img
            src={discordIcon}
            alt="Discord"
            className="favorite-player-discord-logo"
          />{" "}
          JOIN & TELL US ABOUT YOUR FAV PLAYER
        </a>
      </div>
      <div className="favorite-player-image-content">
        <img src={nbalegends} alt="Basketball Action" />
        <blockquote>"NBA CHAMPIONS, HEROES, LEGENDS!!!"</blockquote>
      </div>
    </section>
  );
}

export default FavoritePlayer;

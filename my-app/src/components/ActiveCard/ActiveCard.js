import React from "react";
import "./ActiveCard.css";
import russellwestbrookDunk from "./westbrookDunk.gif"; // Update with the path to your image
import discordIcon from "../Header/discordlogo.png"; // Make sure the path is correct

function ActiveCard() {
  return (
    <section className="active-card">
      <div className="active-card-text-content">
        <h2>Active & Lit Up🔥</h2>
        <p>
          Our community is active & lit up, just like the games. Join a
          non-toxic community of basketball fans just like you. NBA Zone is the
          best NBA forum to hangout with other basketball fans and get streaks.
          There’s multiple opportunities through NBA forum discord server. Plus,
          our mods are super active and look after the content being posted
          every hour. And to top it all, it’s free to join.
        </p>
        <a
          href="https://discord.gg/nbachat"
          target="_blank"
          rel="noreferrer"
          className="active-card-join-discord-button"
        >
          <img
            src={discordIcon}
            alt="Discord"
            className="active-card-discord-logo"
          />{" "}
          JOIN NBA ZONE ON DISCORD
        </a>
      </div>
      <div className="active-card-image-content">
        <img src={russellwestbrookDunk} alt="Basketball Action" />
        <blockquote>"Exciting! Exhilerating! Intense!!!"</blockquote>
      </div>
    </section>
  );
}

export default ActiveCard;

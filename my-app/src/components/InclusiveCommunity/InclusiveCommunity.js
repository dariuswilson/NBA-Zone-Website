import React from "react";
import "./InclusiveCommunity.css";
import guyHoldingBall from "./guyHoldingBall.jpg"; // Update with the path to your image
import discordIcon from "../Header/discordlogo.png"; // Make sure the path is correct

function InclusiveCommunity() {
  return (
    <section className="inclusive-community">
      <div className="inclusive-community-text-content">
        <h2>Inclusive Community</h2>
        <p>
          NBA ZONE is an inclusive community of basketball fans. A welcoming
          place for fans of all teams and knowledge-levels. Doesn’t matter if
          you’re a 2 month young fan or 20 year old fan, we welcome you all. In
          NBA forum discord server, you will find many others like. Make friends
          and strike cheerful conversations about basketball. Engage in
          discussions, debates, and celebrations without the tension of
          rivalries.
        </p>
        <a
          href="https://discord.gg/nbachat"
          target="_blank"
          rel="noreferrer"
          className="inclusive-community-join-discord-button"
        >
          <img
            src={discordIcon}
            alt="Discord"
            className="inclusive-community-discord-logo"
          />{" "}
          JOIN NBA ZONE ON DISCORD
        </a>
      </div>
      <div className="inclusive-community-image-content">
        <img src={guyHoldingBall} alt="Basketball Action" />
        <blockquote>Welcoming, Supportive, & Diverse</blockquote>
      </div>
    </section>
  );
}

export default InclusiveCommunity;

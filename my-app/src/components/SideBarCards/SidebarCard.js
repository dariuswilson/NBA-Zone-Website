import React from "react";
import "./SidebarCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarCard({ title, socials }) {
  return (
    <div className="sidebar-card">
      <h4>{title}</h4>
      <div className="social-links">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SidebarCard;

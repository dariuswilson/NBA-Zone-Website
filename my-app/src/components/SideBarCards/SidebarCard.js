// SidebarCard.js
import React from "react";
import "./SidebarCard.css";

function SidebarCard({ title, content }) {
  return (
    <div className="sidebar-card">
      <h4>{title}</h4>
      <p>{content}</p>
      {/* Add other elements like images or buttons as needed */}
    </div>
  );
}

export default SidebarCard;

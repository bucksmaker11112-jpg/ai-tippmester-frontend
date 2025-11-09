import React from "react";

export default function TippmasterAvatar({ mood }) {
  return (
    <div className="card avatar-card">
      <div className={`avatar-circle ${mood}`}>
        <div className="eyes">
          <span className="eye left" />
          <span className="eye right" />
        </div>
        <div className="mouth" />
      </div>
      <p className="avatar-status">
        {mood === "active" ? "🟢 AI Online" : "💤 Tanulási mód"}
      </p>
    </div>
  );
}

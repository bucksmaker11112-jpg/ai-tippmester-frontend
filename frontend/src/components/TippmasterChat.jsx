import React, { useState } from "react";
import api from "../api.js";

export default function TippmasterChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Szia, Tippmester vagyok! Mit szeretnél megtudni ma?" },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMsg = { from: "user", text: input };
    setMessages([...messages, newMsg]);
    setInput("");

    try {
      const res = await fetch(`${api.base}/chat?q=${encodeURIComponent(input)}`);
      const data = await res.json();
      setMessages(m => [...m, { from: "ai", text: data.reply || "Ezen még gondolkodom..." }]);
    } catch {
      setMessages(m => [...m, { from: "ai", text: "A backend most nem elérhető." }]);
    }
  };

  return (
    <div className="card chat-card">
      <h3>💬 Tippmester chat</h3>
      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Kérdezz valamit..."
        />
        <button onClick={sendMessage}>Küldés</button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./style.css";

import Dashboard from "./components/Dashboard.jsx";
import TippmasterChat from "./components/TippmasterChat.jsx";
import TippmasterAvatar from "./components/TippmasterAvatar.jsx";
import LiveOddsFeed from "./components/LiveOddsFeed.jsx";
import Stats from "./components/Stats.jsx";
import Bankroll from "./components/Bankroll.jsx";
import api from "./api.js";

export default function App() {
  const [status, setStatus] = useState("offline");
  const [health, setHealth] = useState(null);

  // Backend elérhetőség figyelése
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`${api.base}/health`);
        if (res.ok) {
          const data = await res.json();
          setHealth(data);
          setStatus("online");
        } else setStatus("offline");
      } catch {
        setStatus("offline");
      }
    };
    checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">Tippmester AI 4.8</h1>
        <span className={`status-badge ${status}`}>
          {status === "online" ? "🟢 Online" : "⚫ Offline"}
        </span>
      </header>

      <main className="dashboard-grid">
        <section className="left-panel">
          <Dashboard />
          <Bankroll />
          <Stats />
        </section>

        <section className="right-panel">
          <TippmasterAvatar mood={status === "online" ? "active" : "idle"} />
          <LiveOddsFeed />
          <TippmasterChat />
        </section>
      </main>

      <footer className="footer">
        © Tippmester AI 4.8 — Monte Carlo Hybrid v3.2 + Live Bias Engine
      </footer>
    </div>
  );
}

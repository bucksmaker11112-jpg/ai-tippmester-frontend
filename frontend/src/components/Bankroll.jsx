import React, { useEffect, useState } from "react";

export default function Bankroll() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/bankroll")
      .then(r => r.json()).then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) return <div className="card"><h3>💰 Bankroll (HUF)</h3><p>Betöltés…</p></div>;

  const pct = ((data.total_profit / data.start) * 100).toFixed(2);

  return (
    <div className="card">
      <h3>💰 Bankroll (HUF)</h3>
      <p>Kezdő összeg: {data.start.toLocaleString()} Ft</p>
      <p>Mai profit: {data.today_profit >= 0 ? "+" : ""} {data.today_profit.toLocaleString()} Ft</p>
      <p>Összes profit: {data.total_profit >= 0 ? "+" : ""} {data.total_profit.toLocaleString()} Ft  ({pct}%)</p>
    </div>
  );
}

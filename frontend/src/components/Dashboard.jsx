import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [tips, setTips] = useState([]);
  const [combo, setCombo] = useState(null);

  const load = async () => {
    const base = import.meta.env.VITE_API_URL;
    const [s, c] = await Promise.all([
      fetch(base + "/api/tips/single").then(r=>r.json()),
      fetch(base + "/api/tips/combo").then(r=>r.json())
    ]);
    setTips(s || []);
    setCombo(c || null);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="card">
      <h3>📈 Mai tippek (4 Single + 1 Kombó)</h3>
      <ul>
        {tips.map((t,i)=>(
          <li key={i}>{t.match} ▸ {t.pick}  <b>{t.odds}</b></li>
        ))}
      </ul>
      <h4>Kombó Odds: <b>{combo ? combo.combo_odds : "—"}</b> ×</h4>
      <button onClick={load}>Újragenerálás</button>
    </div>
  );
}

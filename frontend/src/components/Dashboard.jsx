import React from "react";

export default function Dashboard() {
  return (
    <div className="card">
      <h3>📈 Mai tippek (4 Single + 1 Kombó)</h3>
      <ul>
        <li>Real Madrid – Barca ▸ Hazai 2.10</li>
        <li>PSG – Lyon ▸ Over 2.5  1.85</li>
        <li>Liverpool – Chelsea ▸ BTTS  1.92</li>
        <li>Juve – Napoli ▸ Under 2.5  1.70</li>
      </ul>
      <h4>Kombó Odds:  12.85 ×</h4>
      <button>Újragenerálás</button>
    </div>
  );
}

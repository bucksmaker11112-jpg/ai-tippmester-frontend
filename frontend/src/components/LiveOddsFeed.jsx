import React, { useEffect, useState } from "react";

export default function LiveOddsFeed() {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    const sample = [
      { match: "Man City – Arsenal", home: 1.85, draw: 3.5, away: 4.1 },
      { match: "Bayern – Dortmund", home: 1.65, draw: 3.9, away: 5.0 },
    ];
    setOdds(sample);
  }, []);

  return (
    <div className="card">
      <h3>⚡ Élő Odds Feed</h3>
      <table className="odds-table">
        <thead>
          <tr><th>Meccs</th><th>1</th><th>X</th><th>2</th></tr>
        </thead>
        <tbody>
          {odds.map((o, i) => (
            <tr key={i}>
              <td>{o.match}</td>
              <td>{o.home}</td>
              <td>{o.draw}</td>
              <td>{o.away}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

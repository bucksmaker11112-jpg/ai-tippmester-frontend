import React, { useEffect, useState } from "react";

export default function LiveOddsFeed() {
  const [odds, setOdds] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_API_URL + "/api/live_odds";
    const load = () => fetch(url).then(r=>r.json()).then(setOdds).catch(()=>setOdds([]));
    load();
    const t = setInterval(load, 30000); // 30 mp frissítés
    return () => clearInterval(t);
  }, []);

  return (
    <div className="card">
      <h3>⚡ Élő Odds Feed</h3>
      <table className="odds-table">
        <thead><tr><th>Meccs</th><th>1</th><th>X</th><th>2</th></tr></thead>
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

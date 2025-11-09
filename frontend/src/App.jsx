import React, { useEffect, useState } from 'react';
import ChatPanel from './components/ChatPanel.jsx';
import LiveTipp from './components/LiveTipp.jsx';
import TippList from './components/TippList.jsx';
import ComboTipp from './components/ComboTipp.jsx';
import Bankroll from './components/Bankroll.jsx';
import Stats from './components/Stats.jsx';
import TippmasterAvatar from './components/TippmasterAvatar.jsx';

export default function App(){
  const [health, setHealth] = useState(null);
  useEffect(()=>{
    const api = (import.meta.env.VITE_API_URL || 'http://localhost:10050') + '/health';
    fetch(api).then(r=>r.json()).then(setHealth).catch(()=>setHealth(null));
  },[]);
  return (
    <div style={{fontFamily:'Inter, system-ui, sans-serif', background:'linear-gradient(135deg,#0f0f10,#1a1f26)', minHeight:'100vh', color:'#e6f4ff'}}>
      <header style={{padding:'12px 16px', position:'sticky', top:0, background:'rgba(10,14,18,0.6)', backdropFilter:'blur(6px)', zIndex:10}}>
        <strong>Tippmester AI 4.8</strong>
        <span style={{marginLeft:8, opacity:.7}}>{health ? 'online' : 'offline'}</span>
      </header>
      <main style={{maxWidth:980, margin:'0 auto', padding:16, display:'grid', gap:12}}>
        <TippmasterAvatar/>
        <Bankroll/>
        <LiveTipp/>
        <ComboTipp/>
        <TippList/>
        <Stats/>
        <ChatPanel/>
      </main>
      <footer style={{textAlign:'center', opacity:.6, padding:12}}>© Tippmester 4.8</footer>
    </div>
  );
}

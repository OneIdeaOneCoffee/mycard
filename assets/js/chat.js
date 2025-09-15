// assets/js/chat.js
(() => {
  const win = document.getElementById("chat-window");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const nameEl = document.getElementById("chat-name");

  const WS_URL = (window.__CHAT_WS_URL) || ((location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws');

  function esc(s){ return String(s||"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"); }
  function render(m){
    const d = document.createElement("div");
    d.style.padding="6px 4px"; d.style.marginBottom="6px";
    d.innerHTML = `<strong>${esc(m.sender||m.source||'anon')}</strong>: ${esc(m.content)}`;
    win.appendChild(d);
    win.scrollTop = win.scrollHeight;
  }

  // connect websocket
  let ws;
  function connect(){
    ws = new WebSocket(WS_URL);
    ws.onopen = ()=> console.log("WS open");
    ws.onmessage = (ev) => {
      try{
        const p = JSON.parse(ev.data);
        if(p.type === "history"){ p.messages.forEach(render); return; }
        render(p);
      }catch(e){ console.error(e); }
    };
    ws.onclose = ()=> { console.log("WS closed, retry in 2s"); setTimeout(connect,2000); };
  }
  connect();

  // form submit
  form.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    const text = input.value.trim(); if(!text) return;
    const name = nameEl.value.trim() || "Visitante";
    // optimistic display
    render({ source:"visitor", sender: name, content: text });
    // send to backend via WS
    if(ws && ws.readyState === 1){
      ws.send(JSON.stringify({ action:"send", name, message:text }));
    }else{
      // fallback: try POST (if WS not available)
      fetch("/send", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ name, message:text }) }).catch(()=>{});
    }
    input.value = "";
  });
})();

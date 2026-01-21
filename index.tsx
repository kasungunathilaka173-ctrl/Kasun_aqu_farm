import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.info("Kasun Aqua Farm: App Bootstrapping...");

const rootNode = document.getElementById('root');

if (!rootNode) {
  const msg = "Critical Error: Could not find element with id 'root'.";
  console.error(msg);
  document.body.innerHTML += `<div style="color:red;padding:20px;">${msg}</div>`;
} else {
  try {
    const root = ReactDOM.createRoot(rootNode);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.info("Kasun Aqua Farm: Mount success.");
  } catch (err) {
    console.error("Kasun Aqua Farm: Rendering failed at entry point.", err);
    rootNode.innerHTML = `
      <div style="color:red;padding:40px;background:white;border:1px solid red;margin:20px;border-radius:10px;">
        <h1 style="font-weight:bold;margin-bottom:10px;">App Rendering Error</h1>
        <p>${err instanceof Error ? err.message : String(err)}</p>
      </div>
    `;
  }
}
// client/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ReferralProvider } from "./contexts/ReferralContext.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReferralProvider>
      <App />
    </ReferralProvider>
  </React.StrictMode>
);


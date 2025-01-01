// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header"; // Import Header component
import Footer from "./Footer"; // Import Footer component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header /> {/* Render Header */}
      <App /> {/* Render App */}
      <Footer /> {/* Render Footer */}
    </div>
  </React.StrictMode>
);

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";

// Importing the components
import LandingPage from "./LandingPage";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 id="abc">Welcome to My Website</h1>

        <ul style={{ listStyleType: "none", padding: "0", fontSize: "20px" }}>
          <li style={{ display: "inline", margin: "0 15px" }}>
            <NavLink
              to="/landing-page"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#e74c3c" : "#3498db", // Active link color
              })}
            >
              Landing Page
            </NavLink>
          </li>
          <li style={{ display: "inline", margin: "0 15px" }}>
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#e74c3c" : "#3498db", // Active link color
              })}
            >
              Portfolio
            </NavLink>
          </li>
          <li style={{ display: "inline", margin: "0 15px" }}>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#e74c3c" : "#3498db", // Active link color
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Define routes for each component */}
        <Routes>
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

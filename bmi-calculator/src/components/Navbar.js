import React from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection, darkMode, setDarkMode }) => {
  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <div className="logo-area">
        <img src="/1.png" alt="BMI Logo" className="logo" />
        <h1>BMI Calculator</h1>
      </div>

      <nav className="nav-links">
        <button onClick={() => scrollToSection("calculator")} className="nav-btn">Calculator</button>
        <button onClick={() => scrollToSection("info")} className="nav-btn">Info</button>
        <button onClick={() => scrollToSection("chart")} className="nav-btn">Chart</button>
        <button onClick={() => scrollToSection("about")} className="nav-btn">About</button>
      </nav>

      <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Navbar;

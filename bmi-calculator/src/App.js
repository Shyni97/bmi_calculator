import React, { useState, useRef } from "react";
import "./App.css";
import BMIChart from "./BMIChart";


function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Refs for scroll
  const infoRef = useRef(null);
  const chartRef = useRef(null);
  const calculatorRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      alert("Please enter valid height and weight.");
      return;
    }

    let heightInMeters = h;
    let weightInKg = w;

    if (unit === "imperial") {
      heightInMeters = h * 0.0254;
      weightInKg = w * 0.453592;
    } else {
      heightInMeters = h / 100;
    }

    const calculatedBMI = (weightInKg / (heightInMeters ** 2)).toFixed(1);
    setBmi(calculatedBMI);

    if (calculatedBMI < 18.5) setCategory("🔵 Underweight");
    else if (calculatedBMI < 24.9) setCategory("🟢 Normal");
    else if (calculatedBMI < 29.9) setCategory("🟠 Overweight");
    else setCategory("🔴 Obese");
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className={`page ${darkMode ? "dark" : ""}`}>
      {/* Header */}


      <header className="header">
        <div className="logo-area">
          <img 
            src="/1.png" 
            alt="BMI Logo" 
            className="logo" 
            style={{ width: '80px', height: '80px' }} // Adjust these values as needed
          />
          <h1>BMI Calculator</h1>
        </div>

        {/* Rest of your header code remains the same */}
        <nav className="nav-links">
          <button onClick={() => scrollToSection(calculatorRef)} className="nav-btn">Calculator</button>
          <button onClick={() => scrollToSection(infoRef)} className="nav-btn">Info</button>
          <button onClick={() => scrollToSection(chartRef)} className="nav-btn">Chart</button>
          <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>

        
      </header>

      <section ref={infoRef} className="info-section">
        <h2>What is BMI?</h2>
        <p>
          Body Mass Index (BMI) is a simple calculation using height and weight to estimate body fat. The purpose of BMI is it helps categorize weight status (underweight, normal, overweight, obese). But, we should remember that BMI doesn't measure body fat directly—may not be accurate for athletes, pregnant women, or the elderly.
        </p>

        <div className="calculation-section">
          <h3>How to Calculate BMI</h3>
          
          <div className="formula-group">
            <h4>Formula (Metric):</h4>
            <div className="formula-box">
              BMI = Weight (kg) / Height (m)²
            </div>
            <p>Example: <strong>Weight</strong>: 70 kg | <strong>Height</strong>: 1.75 m → BMI = 70 / (1.75 × 1.75) = 22.9 (Normal weight)</p>
          </div>

          <div className="formula-group">
            <h4>Formula (Imperial):</h4>
            <div className="formula-box">
              BMI = (Weight (lbs) × 703) / Height (in)²
            </div>
            <p>Example: <strong>Weight</strong>: 154 lbs | <strong>Height</strong>: 68 in → BMI = (154 × 703) / (68 × 68) = 23.4 (Normal weight)</p>
          </div>
        </div>

        <div className="bmi-guide">
          <h3>BMI Categories</h3>
          <div className="bmi-range" style={{ background: "#007bff" }}>
            Underweight<br /><small>&lt; 18.5</small>
          </div>
          <div className="bmi-range" style={{ background: "#28a745" }}>
            Normal<br /><small>18.5 – 24.9</small>
          </div>
          <div className="bmi-range" style={{ background: "#ffc107", color: "#000" }}>
            Overweight<br /><small>25 – 29.9</small>
          </div>
          <div className="bmi-range" style={{ background: "#dc3545" }}>
            Obese<br /><small>30+</small>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section ref={chartRef} className="bmi-image">
        <img src="/bmi-range-chart.jpg" alt="BMI Normal Range Chart" />
        <p className="caption">Visual BMI Classification Chart</p>
      </section>

      {/* Calculator */}
      <section ref={calculatorRef} className="card">
        <button className="unit-toggle" onClick={toggleUnit}>
          Switch to {unit === "metric" ? "Imperial (in/lb)" : "Metric (cm/kg)"}
        </button>

        <label>{unit === "metric" ? "📏 Height (cm)" : "📏 Height (in)"}</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder={unit === "metric" ? "e.g. 170" : "e.g. 65"}
        />

        <label>{unit === "metric" ? "⚖ Weight (kg)" : "⚖ Weight (lb)"}</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={unit === "metric" ? "e.g. 65" : "e.g. 143"}
        />

        <div className="buttons">
          <button onClick={calculateBMI}>🔍 Calculate</button>
          <button className="secondary" onClick={reset}>🔁 Reset</button>
        </div>

        {bmi && (
          <div className="result">
            <p>Your BMI is: <strong>{bmi}</strong></p>
            <p>Category: {category}</p>
            <p className="range">Healthy BMI Range: 18.5 – 24.9</p>
            <BMIChart bmi={bmi} />
          </div>
        )}
      </section>

      {/* Footer */}
      <footer ref={aboutRef} className="footer">
        <p>© {new Date().getFullYear()} BMI Calculator. All rights reserved.</p>
        <div className="socials">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

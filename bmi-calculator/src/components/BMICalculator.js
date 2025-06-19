import React, { useState } from "react";
import BMIGauge from "./BMIGauge";

export default function BMICalculator({ unit, setUnit }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

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
    <section className="card calculator">
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
          <BMIGauge bmi={bmi} />
        </div>
      )}
    </section>
  );
}

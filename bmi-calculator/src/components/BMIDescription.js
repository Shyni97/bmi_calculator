import React from "react";

export default function BMIDescription() {
  return (
    <section className="info-section">
      <h2>What is BMI?</h2>
      <p>
        Body Mass Index (BMI) is a simple calculation using a person's height and weight.
        The result helps to identify whether a person is underweight, normal weight, overweight, or obese.
      </p>

      <div className="bmi-guide">
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
  );
}

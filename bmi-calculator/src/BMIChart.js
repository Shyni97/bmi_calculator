import React from 'react';

const BMIChart = ({ bmi }) => {
  const bmiValue = parseFloat(bmi);

  const getColor = () => {
    if (bmiValue < 18.5) return "#007bff";
    if (bmiValue < 25) return "#28a745";
    if (bmiValue < 30) return "#ffc107";
    return "#dc3545";
  };

  return (
    <div style={{ marginTop: "1rem", width: "100%" }}>
      <div
        style={{
          height: "20px",
          width: "100%",
          background: "#ddd",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${Math.min(bmiValue, 40) * 2.5}%`,
            background: getColor(),
            borderRadius: "10px",
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>
      <small style={{ color: "#666" }}>Visual BMI Level</small>
    </div>
  );
};

export default BMIChart;

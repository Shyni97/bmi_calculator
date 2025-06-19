import React from "react";

export default function BMIGauge({ bmi }) {
  const bmiNum = parseFloat(bmi);

  // Calculate position in percentage for the gauge pointer on scale 10 to 40 BMI
  const minBMI = 10;
  const maxBMI = 40;
  let pos = ((bmiNum - minBMI) / (maxBMI - minBMI)) * 100;
  if (pos < 0) pos = 0;
  if (pos > 100) pos = 100;

  return (
    <div className="bmi-gauge">
      <div className="scale">
        <span>10</span>
        <span>18.5</span>
        <span>24.9</span>
        <span>29.9</span>
        <span>40+</span>
      </div>
      <div className="pointer" style={{ left: `${pos}%` }} />
    </div>
  );
}

// src/components/DateOfBirth.js
import React, { useState } from "react";

const DateOfBirth = ({ onCalculateAge }) => {
  const [dob, setDob] = useState("");

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };

  const handleCalculateAge = () => {
    // Perform age calculation logic here
    // For simplicity, let's assume the date format is YYYY-MM-DD
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    onCalculateAge(age);
  };

  return (
    <div>
      <label htmlFor="dob">Date of Birth:</label>

      <div>
      <input type="date" id="dob" value={dob} onChange={handleInputChange} />

      </div>
      <div>
        <button onClick={handleCalculateAge}>Calculate Age</button>
      </div>
    </div>
  );
};

export default DateOfBirth;

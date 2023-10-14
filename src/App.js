// src/App.js
import React, { useState } from "react";
import DateOfBirth from "./components/DateOfBirth";
import AgeDisplay from "./components/AgeDisplay";
import "./App.css";

const App = () => {
  const [age, setAge] = useState(null);

  const handleCalculateAge = (calculatedAge) => {
    setAge(calculatedAge);
  };

  return (
    <div className="outerdiv">
      <div>
        <h1>Age Calculator</h1>
      </div>

      <div>
        <DateOfBirth onCalculateAge={handleCalculateAge} />
      </div>
      <div>{age !== null && <AgeDisplay age={age} />}</div>
    </div>
  );
};

export default App;

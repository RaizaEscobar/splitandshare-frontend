import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function CalculateFlatmate() {
  return (
    <div className="address-info">
      <div>
        <label>Flatmate Name</label>
        <input type="text"></input>
      </div>
      <div>
        <label> Nº of people by room</label>
        <input type="number"></input>
      </div>
      <div>
        <label> Ideal Budget</label>
        <input type="number"></input>
      </div>
    </div>
  );
}

export default CalculateFlatmate;

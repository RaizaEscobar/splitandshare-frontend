import React from "react";

function CalculateResult(props) {
  return (
    <div className="result">
    
      <span> Flatmate: {props.flatmateName}</span>

      <span>Habitación: {props.roomName}</span>

      <span> Fairly rent: {props.price}</span>
    </div>
  );
}

export default CalculateResult;

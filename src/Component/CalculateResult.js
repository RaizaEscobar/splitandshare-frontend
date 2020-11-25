import React from "react";

function CalculateResult(props) {
  return (
    <div className="result">

      <span className="labelCalculator"> Flatmate:</span><span className="calculatorResult"> {props.flatmateName}</span>

      <span className="labelCalculator">Habitación:</span><span  className="calculatorResult"> {props.roomName}</span>

      <span className="labelCalculator"> Fairly rent:</span><span  className="calculatorResult"> {props.price} €</span>
    </div>
  );
}

export default CalculateResult;

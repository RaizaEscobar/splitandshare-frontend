import React from "react";

function CalculateRoom(props) {
  return (
    <div className="address-info">
      <div>
        <label>Room Name</label>
        <input type="text"></input>
      </div>
      <div>
        <label> Type of room</label>
        <select>
          <option value="1">Single</option>
          <option value="2">Double</option>
          <option value="3">Triple</option>
        </select>
      </div>
      <div>
        <label> Room size</label>
        <input type="number"></input>
      </div>
    </div>
  );
}

export default CalculateRoom;

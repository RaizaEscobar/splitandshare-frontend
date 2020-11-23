import React, { useState, useEffect } from "react";
import axios from "axios";

function FlatDetails(props) {
  const [flat, setFlat] = useState({});

  useEffect(() => {
    if(Object.keys(flat).length===0){
    axios
      .get(`http://localhost:4000/flat/${props.match.params.id}`)
      .then((response) => {
        setFlat(response.data);
      });
    }
  });

  return (
    <div>
      <div>
        <img src={flat.flatImages ? flat.flatImages[0] : ""} alt="Flat" width="500" height="600"></img>
      </div>
      <div>
        <p>{flat.title} </p>
        <p>{flat.description}</p>
        <ul>
          <li>Price: {flat.price}</li>
          <li>Contact:{flat.age}</li>
          <li>Rooms:{flat.rooms}</li>
          <li>Bathrooms:{flat.restrooms}</li>
          <li>Neighborhood:{flat.neighborhood}</li>
          <li>Airconditioner:{flat.airconditioner}</li>
          <li>Balcony:{flat.balcony}</li>
          <li>Elevator:{flat.elevator}</li>
          <li>Parking:{flat.parking}</li>
          <li>Address:{flat.address}</li>
          <li>Square Meters:{flat.squareMeters}</li>
          <li>Furnished:{flat.furnished}</li>
          <li>Terrace:{flat.terrace}</li>
          <li>Swimming Pool:{flat.swimmingPool}</li>
          <li>Central Heating:{flat.centralHeating}</li>
          <li>Store Room:{flat.storeRoom}</li>
          <li>Builtin Wardrobes:{flat.builtinWardrobes}</li>
          <li>Central Heating:{flat.centralHeating}</li>
        </ul>
      </div>
    </div>
  );
}

export default FlatDetails;

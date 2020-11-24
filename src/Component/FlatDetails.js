import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonCard from "./ButtonCard";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";

function FlatDetails(props) {
  const [flat, setFlat] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if(Object.keys(flat).length===0){
      service.getFlat(props.match.params.id)
      .then((response) => {        
        setFlat(response)
      })
      service.isFavoriteFlat(props.match.params.id)
      .then((response) => {        
        setIsFavorite(response)
      })
      }
  });

  const handleFavorite = () => {
    service.setFavoriteFlat(props.match.params.id)
    .then(() => {setIsFavorite(!isFavorite)})    
  }

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
      {flat.flatOwner === props.user._id ? <ButtonCard buttonTitle="Edit Flat" link={`/flat/edit/${flat._id}`}/> :  <button onClick={handleFavorite}>{isFavorite ? "remove from favorite" : "add to favorite"}</button>}
    </div>
  );
}

export default withAuth(FlatDetails);

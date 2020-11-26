import React, { useState, useEffect } from "react";
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
    <div className="flatDetailCard">
      

      <div className="card-group" id="fixFlatDetailCard">
  <div className="card">
    <img className="card-img-top" src={flat.flatImages ? flat.flatImages[0] : ""} alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">{flat.title}</h5>
      <p className="card-text">{flat.description}</p>
      <ul>
          <li>Price: {flat.price} €</li>
          <li>Contact:{flat.age}</li>
          <li>Rooms:{flat.rooms}</li>
          <li>Bathrooms:{flat.restrooms}</li>
          <li>Neighborhood:{flat.neighborhood}</li>
          <li>Airconditioner:{flat.airconditioner  ? "Yes" : "No"}</li>
          <li>Balcony:{flat.balcony  ? "Yes" : "No"}</li>
          <li>Elevator:{flat.elevator ? "Yes" : "No"}</li>
          <li>Parking:{flat.parking  ? "Yes" : "No"}</li>
          <li>Address:{flat.address ? "Yes" : "No"}</li>
          <li>Square Meters:{flat.squareMeters ? "Yes" : "No"}</li>
          <li>Furnished:{flat.furnished ? "Yes" : "No"}</li>
          <li>Terrace:{flat.terrace ? "Yes" : "No"}</li>
          <li>Swimming Pool:{flat.swimmingPool ? "Yes" : "No"}</li>
          <li>Central Heating:{flat.centralHeating ? "Yes" : "No"}</li>
          <li>Store Room:{flat.storeRoom ? "Yes" : "No"}</li>
          <li>Builtin Wardrobes:{flat.builtinWardrobes ? "Yes" : "No"}</li>
          <li>Central Heating:{flat.centralHeating ? "Yes" : "No"}</li>
        </ul>
    </div>
    <div className="card-footer" id="flatDetailFooter">
    {flat.flatOwner === props.user._id ? <ButtonCard buttonTitle="Edit Flat" link={`/flat/edit/${flat._id}`} /> :  <button className = "btnB" onClick={handleFavorite}>{isFavorite ? "remove from favorite" : "add to favorite"}</button>}
      </div>
  </div>
</div>
    </div>
  );
}

export default withAuth(FlatDetails);

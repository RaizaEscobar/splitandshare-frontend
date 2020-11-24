import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonCard from "./ButtonCard";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";

function DetailFlatmate(props) {
  const [flatmate, setFlatmate] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if(Object.keys(flatmate).length===0){
    service.getFlatmate(props.match.params.id)
    .then((response) => {      
      setFlatmate(response)
    })
    service.isFavoriteUser(props.match.params.id)
    .then((response) => {      
      setIsFavorite(response)
    })
    }
  }); 

  const handleFavorite = () => {
    service.setFavoriteUser(props.match.params.id)
    .then(() => {setIsFavorite(!isFavorite)}) 
  }

  return (
    <div>
      <div>
        <img src={flatmate.image} alt="Profile" width="250" height="300"></img>
      </div>
      <div>
        <p> Hi, I am {flatmate.username} </p>
        <ul>
          <li>Gender: {flatmate.gender}</li>
          <li>Age:{flatmate.age}</li>
          <li>My Budget:{flatmate.maxBudget}</li>
          <li>Pets:{flatmate.hasPet}</li>
          <li>Smoking:{flatmate.isSmoking}</li>
          <li>Studying:{flatmate.isStudying}</li>
          <li>Working:{flatmate.isWorking}</li>
        </ul>
         <div> 
          <p> I am looking for:</p>
          <ul>
          <li>Gender: {flatmate.searchingFor ? flatmate.searchingFor.gender : ""}</li>
          <li>Max number of flatmates: {flatmate.searchingFor ? flatmate.searchingFor.Flatmates : ""}</li>
          <li>Location: {flatmate.searchingFor ? flatmate.searchingFor.location : ""}</li>
          <li>pets: {flatmate.searchingFor ? flatmate.searchingFor.pets : ""}</li>
          <li>smoke: {flatmate.searchingFor ? flatmate.searchingFor.smoke : ""}</li>
          <li>Age: Between{flatmate.searchingFor ? flatmate.searchingFor.minAge : ""} and {flatmate.searchingFor ? flatmate.searchingFor.maxAge : ""}</li>
          </ul>
        </div>  
       
       { props.user._id === props.match.params.id ? <ButtonCard buttonTitle="Edit my profile" link="/improveMyProfile"  /> : <button onClick={handleFavorite}>{isFavorite ? "remove from favorite" : "add to favorite"}</button>}
       
      </div>
    </div>
  );
}

export default withAuth(DetailFlatmate);

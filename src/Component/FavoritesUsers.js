import React, {useState, useEffect} from "react";
import { withAuth } from "../lib/AuthProvider";		
import MatchFlatmate from "./MatchFlatmate";
import service from "../api/service";


function FavoritesUsers(props) {
    const [favoritesUsers, setFavoritesUsers] = useState([]);

    useEffect(()=>{
      if(favoritesUsers.length===0){
        service.myFavoritesUsers().then((response) => {
            setFavoritesUsers(response);
          });
      }
    })
    return (
        <div>
            {favoritesUsers.map((element, index)=>{
                return <MatchFlatmate key={index} {...element}></MatchFlatmate>
            })}
        </div>
    )
}
export default withAuth(FavoritesUsers)
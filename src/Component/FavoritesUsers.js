import React, {useState, useEffect} from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";		
import MatchFlatmate from "./MatchFlatmate";


function FavoritesUsers(props) {
    const [favoritesUsers, setFavoritesUsers] = useState([]);

    useEffect(()=>{
      if(favoritesUsers.length===0){
        axios.get("http://localhost:4000/users/favorites", {params: {"id": props.user._id}}).then((response) => {
            setFavoritesUsers(response.data);
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
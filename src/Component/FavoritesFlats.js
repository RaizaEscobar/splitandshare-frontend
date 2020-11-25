import React, {useState, useEffect} from "react";
import { withAuth } from "../lib/AuthProvider";		
import FlatlistCard from "./FlatlistCard";
import service from "../api/service";

function FavoritesFlats(props) {
    const [favoritesFlats, setFavoritesFlats] = useState([]);

    useEffect(()=>{
      if(favoritesFlats.length===0){
        service.myFavoritesFlats().then((response) => {
            setFavoritesFlats(response);
          });
      }
    })
    return (
        <div className= "favoriteFlatsGrid">
            {favoritesFlats.map((element, index)=>{
                return <FlatlistCard key={index} {...element} />
            })}
        </div>
    )
}
export default withAuth(FavoritesFlats)
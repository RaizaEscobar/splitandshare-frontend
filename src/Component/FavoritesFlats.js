import React, {useState, useEffect} from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";		
import FlatlistCard from "./FlatlistCard";


function FavoritesFlats(props) {
    const [favoritesFlats, setFavoritesFlats] = useState([]);

    useEffect(()=>{
      if(favoritesFlats.length===0){
        axios.get("http://localhost:4000/flats/favorites", {params: {"id": props.user._id}}).then((response) => {
            setFavoritesFlats(response.data);
          });
      }
    })
    return (
        <div>
            {favoritesFlats.map((element, index)=>{
                return <FlatlistCard key={index} {...element} />
            })}
        </div>
    )
}
export default withAuth(FavoritesFlats)
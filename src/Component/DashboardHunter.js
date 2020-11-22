import React, {useState, useEffect} from "react";
import FavoriteCard from "./FavoriteCard.js";
import MatchFlatmate from "./MatchFlatmate.js";
import axios from "axios";

function DashboardHunter() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/users/suggested").then((response) => {
            setSuggestedUsers(response.data);
          });
    })
     

  return (
    <>
      <section>
        <FavoriteCard link="/" image="" />
        <FavoriteCard
          title="Favorite flats"
          buttonTitle="Check your flats"
          link="/"
          image=""
        />
        <FavoriteCard
          title="Favorite people"
          buttonTitle="Check your future flatmates"
          link="/"
          image=""
        />
      </section>
      <section>
      {suggestedUsers.map((element,index)=>{
          return <MatchFlatmate key={index} {...element}/>  
      })}  
      </section>
    </>
  );
}

export default DashboardHunter;

import React, {useState, useEffect} from "react";
import FavoriteCard from "./FavoriteCard.js";
import MatchFlatmate from "./MatchFlatmate.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";

function DashboardHunter(props) {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(()=>{
      console.log(props)
      if(suggestedUsers.length===0){
        axios.get("http://localhost:4000/users/suggested").then((response) => {
            setSuggestedUsers(response.data);
          });
      }
    })



  return (
    <>
      <section>
         <FavoriteCard link= {`/user/${props.user._id}`} title="Me" image={props.user.image} />
        <FavoriteCard
          title="Favorite flats"
          buttonTitle="Check your flats"
          link="/flats/favorites"
          image=""
        />
        <FavoriteCard
          title="Favorite people"
          buttonTitle="Check your future flatmates"
          link="/users/favorites"
          image=""
        />
      </section>
      <section>
      {suggestedUsers.map((element,index)=>{
          return <MatchFlatmate key={index} {...element}/>  
      })}  

      <Link to="/flatmates"><button>See more profiles!</button></Link>
      </section>
    </>
  );
}

export default withAuth(DashboardHunter);

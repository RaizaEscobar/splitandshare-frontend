import React, { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard.js";
import MatchFlatmate from "./MatchFlatmate.js";
import { Link } from "react-router-dom";
import service from "../api/service";
import { withAuth } from "../lib/AuthProvider";
import {
  faUser,
  faUserFriends,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import ButtonCard from "./ButtonCard.js";
import Carousel from "react-elastic-carousel";

function DashboardHunter(props) {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const breakPoints = [
    {
      width: 500,
      itemsToShow: 1,
    },
    {
      width: 600,
      itemsToShow: 2,
    },
    {
      width: 768,
      itemsToShow: 3,
    }
  ];
  useEffect(() => {   
    if (isLoading) {
      service.suggestedUsers().then((response) => {        
        setSuggestedUsers(response);
        setIsLoading(false);        
      });
    }
  });

  return (
    <>
      <section className="content">
        <FavoriteCard
          link={`/user/${props.user._id}`}
          title="Me"
          icon={faUser}
          buttonTitle="Check your profile"
        />
        <FavoriteCard
          title="Favorite flats"
          buttonTitle="Check your flats"
          link="/flats/favorites"
          icon={faHouseUser}
        />
        <FavoriteCard
          title="Favorite people"
          buttonTitle="Check your future flatmates"
          link="/users/favorites"
          icon={faUserFriends}
        />
      </section>
      <section>
      <p style={{fontSize: "30px", fontWeight:"bolder"}}>Look these profiles that match with you...</p>
        <div className="matchContainer">
          <div className="match">
            <Carousel breakPoints={breakPoints}>
              {suggestedUsers.map((element, index) => {
                return <MatchFlatmate key={index} {...element} />;
              })}
            </Carousel>
          </div>
          <div className="match">
            <ButtonCard buttonTitle="See more profiles!" link="/flatmates"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default withAuth(DashboardHunter);

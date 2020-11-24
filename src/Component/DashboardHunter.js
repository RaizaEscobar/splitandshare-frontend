import React, { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard.js";
import MatchFlatmate from "./MatchFlatmate.js";
import { Link } from "react-router-dom";
import service from "../api/service";
import { withAuth } from "../lib/AuthProvider";
import {
  faUser,
  faUserFriends,
  faHouseUser
} from "@fortawesome/free-solid-svg-icons";

function DashboardHunter(props) {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(props);
    if (isLoading) {
      service.suggestedUsers().then((response) => {
        console.log(response)
        setSuggestedUsers(response);
        setIsLoading(false)
        console.log(response)
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
      <div  className="match">
          {suggestedUsers.map((element, index) => {
            return <MatchFlatmate key={index} {...element} />;
          })}
          </div>
        <Link to="/flatmates">
          <button>See more profiles!</button>
        </Link>
      </section>
    </>
  );
}

export default withAuth(DashboardHunter);

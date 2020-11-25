import React from 'react'
import FavoriteCard from "./FavoriteCard.js";
import {
  faUser,
  faUserFriends,
  faHouseUser,
  faWarehouse
} from "@fortawesome/free-solid-svg-icons";

 function DashboardOwner() {
    return (
        <div>
             <section className="content">
        <FavoriteCard
          title="Add Flat"
          buttonTitle="Add a new flat"
          link="/addMyFlat"
          icon={faWarehouse}
        />
        <FavoriteCard
          title="My flats"
          buttonTitle="Check my list of flats"
          link="/myListing"
          icon={faHouseUser}
        />
      </section>
        </div>
    )
}


export default DashboardOwner
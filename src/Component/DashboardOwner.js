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
             <section className="content" style={{height: "600px", justifyContent: "space-around"}}>
        <FavoriteCard
          title="Add Flat"
          buttonTitle="Add a new flat"
          link="/addMyFlat"
          icon={faWarehouse}
        />
        <FavoriteCard
          title="My flats"
          buttonTitle="Check my list of flats"
          link="/myListings"
          icon={faHouseUser}
        />
      </section>
        </div>
    )
}


export default DashboardOwner
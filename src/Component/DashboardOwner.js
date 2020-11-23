import React from 'react'
import FavoriteCard from "./FavoriteCard.js";

 function DashboardOwner() {
    return (
        <div>
             <section>
        <FavoriteCard link="/" image="" />
        <FavoriteCard
          title=""
          buttonTitle="Add my flat"
          link="/"
          image=""
        />
        <FavoriteCard
          title=""
          buttonTitle="Check my listings"
          link="/"
          image=""
        />
      </section>
        </div>
    )
}


export default DashboardOwner
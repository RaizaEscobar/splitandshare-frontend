import React from "react";
import { Link } from "react-router-dom";

function FavoriteCard(props) {
  return (
      <section>
          <Link to={props.link}>
          <div>
            <img src={props.image} width="250" height="300"/>
              {props.title && <h2>{props.title}</h2>}
              {props.buttonTitle &&<button>{props.buttonTitle}</button>}
          </div>
          </Link>
      </section>
  );
}

export default FavoriteCard;
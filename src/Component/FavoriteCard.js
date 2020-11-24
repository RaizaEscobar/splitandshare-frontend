import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FavoriteCard.css"

function FavoriteCard(props) {
  return (
    <>
      <Link to={props.link}>
        <div className="card">
          <div class="icon">
          <FontAwesomeIcon icon={props.icon} className="material-icons md-36"/>
          </div>
          <p class="title">{props.title}</p>
          <p class="text">{props.buttonTitle}</p>
        </div>
      </Link>
    </>
  );
}

export default FavoriteCard;

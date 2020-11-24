import React from "react";
import { Link } from "react-router-dom";

function MatchFlatmate(props) {
  return (
      <div className = "matchFlatmate-container">
      
    <Link to={`/user/${props._id}`} style={{ textDecoration: 'none' }} >
     
        <div className="profile-card-4 text-center">
          <img
            src={props.image}
            className="img img-responsive"
            alt="Profile"
            width="250"
            height="300"
          ></img>
          <div className="profile-content">
            <div className="profile-name"> {props.username} </div>

            <div className="row">
              <div className="col-xs-4">
                <div className="profile-overview">
                  <p>Gender</p>
                  <h4>{props.gender} </h4>
                </div>
              </div>
              <div className="col-xs-4">
                    <div className="profile-overview">
                        <p>Age</p>
                        <h4>{props.age} </h4>
                </div>
                </div>
                <div className="col-xs-4">
                    <div className="profile-overview">
                        <p>Budget</p>
                        <h4>{props.maxBudget} € </h4></div>
                </div>
            </div>
          </div>
        </div>
     
    </Link>
  
    </div>
  );
}

export default MatchFlatmate;

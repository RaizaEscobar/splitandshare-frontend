import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath,faBed, faBirthdayCake, faSmoking, faPaw, faMapMarkerAlt, faBriefcase, faGraduationCap, faTransgenderAlt, faVenusMars } from '@fortawesome/free-solid-svg-icons'

function FlatlistCard(props) {
    return (
      <div className = "flatListLine">
        <Link to={`/flat/${props._id}`}>
     
            
            <div className="card" id="flatListCard">
    <img className="card-img-top" id="sizeChange" src={props.flatImages[0]} alt="Card image cap"  width="100" height="100"/>
    <div className="card-body">
      <h5 className="card-title" id="flatListTitle">{props.title} </h5>
      <p className="card-text" id="flatListLetters">{props.price} €</p>
      <p className="card-text" id="flatListlet"><FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: "5px" }}/> {props.neighborhood}</p>
      <hr></hr>
      <div className = "flatChar">
      <p className="card-text"><FontAwesomeIcon icon={faBed} style={{ marginRight: "5px" }} />{props.rooms} rooms</p>
      <p className="card-text"><FontAwesomeIcon icon={faBath} style={{ marginRight: "5px" }} />{props.restrooms} bathrooms</p>
      </div>
    </div>
  </div>
        </Link>
        </div>
    )
}

export default FlatlistCard

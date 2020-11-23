import React from 'react'
import { Link } from "react-router-dom";

function MatchFlatmate(props) {
    return (
        <Link to={`/profile/${props._id}`}>
            <div>
                <img src={props.image} alt="Profile"></img>
            </div>
            <div>
                <ul>
                    <li>{props.username}</li>
                    <li>{props.gender}</li>
                    <li>{props.age}</li>
                    <li>{props.maxBudget}</li>
                </ul>
            </div>
            
            
        </Link>
    )
}

export default MatchFlatmate

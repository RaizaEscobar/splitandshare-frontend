import React from 'react'
import { Link } from "react-router-dom";

function FlatlistCard(props) {
    return (
        <Link to={`/flat/${props._id}`}>
            <div>
                <img src={props.flatImages[0]} alt="Profile"></img>
            </div>
            <div>
                <ul>
                    <li>{props.title}</li>
                    <li>Price: € {props.price}</li>
                    <li>District: {props.neighborhood}</li>
                    <li>Number of rooms: {props.rooms}</li>
                </ul>
            </div>
            
            
        </Link>
    )
}

export default FlatlistCard

import React from 'react'
import { Link } from "react-router-dom";


function ButtonCard(props) {
    return (
        <Link to={props.link}>
            {props.buttonTitle &&<button>{props.buttonTitle}</button>}
        </Link>
    )
}

export default ButtonCard

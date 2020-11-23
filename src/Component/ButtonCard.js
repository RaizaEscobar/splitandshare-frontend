import React from 'react'
import { Link } from "react-router-dom";


function ButtonCard(props) {
    return (
        <Link to={props.link}>
        <div>
            {props.buttonTitle &&<button>{props.buttonTitle}</button>}
        </div>
        </Link>
    )
}

export default ButtonCard
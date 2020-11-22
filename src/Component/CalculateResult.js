import React from 'react'

function CalculateResult(props) {
    return (
        <div>
            <span>{props.flatmateName}</span>
            <span>{props.roomName}</span>
            <span>{props.price}</span>
        </div>
    )
}

export default CalculateResult

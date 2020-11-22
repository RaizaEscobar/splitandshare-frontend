import React from 'react'

function CalculateRoom(props) {
    return (
        <div>
            <label>Room Name</label>
            <input type="text"></input>
            <select>
                <option value="1">Single</option>
                <option value="2">Double</option>
                <option value="3">Triple</option>
            </select>
            <label> Room size</label>
            <input type="number"></input>
        </div>
    )
}

export default CalculateRoom

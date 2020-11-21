import React, { Component } from 'react'
import CalculateFlatmate from './CalculateFlatmate'
import CalculateRoom from './CalculateRoom'

class Calculator extends Component{
    maxRooms=[2,3,4,5,6,7,8,9,10]
    state={
        rooms:[{},{}]

    }
    handleChanges = (event) =>{
        let roomsCopy = []
        for(let i=0; i<event.target.innerText; i++){
            roomsCopy.push({})
        }
        this.setState({
            rooms: roomsCopy
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        }
    
   
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>What's your total rent? €</label>
            <input type='number'></input>
            <label> What's the total size of the flat? m²</label>
            <input type='number'></input>
            {this.maxRooms.map((ele, index)=>{
                return <button onClick={this.handleChanges}>{ele}</button>
            })}
           <div>
            {this.state.rooms.map((ele, index)=>{
                return <CalculateRoom key={index}></CalculateRoom>
            })
            }
            </div>
            <div>
            {this.state.rooms.map((ele, index)=>{
                return <CalculateFlatmate key={index}></CalculateFlatmate>
            })
            }
            </div>

            <button onClick=""> Calculate!! </button>
            </form>
        )
    }
}
export default Calculator

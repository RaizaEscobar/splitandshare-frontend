import React, { Component } from "react";
import CalculateFlatmate from "./CalculateFlatmate";
import CalculateRoom from "./CalculateRoom";
import axios from "axios";
import CalculateResult from "./CalculateResult.js";

class Calculator extends Component {
  maxRooms = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  state = {
    rooms: [{}, {}],
    result: [],
  };
  handleChanges = (event) => {
    let roomsCopy = [];
    for (let i = 0; i < event.target.innerText; i++) {
      roomsCopy.push({});
    }
    this.setState({
      rooms: roomsCopy,
    });
  };

  handleCalculate = (event) => {
    event.preventDefault();
    let body = {
      totalPrice: event.target[0].value,
      totalSize: event.target[1].value,
      rooms: [],
      flatmates: [],
    };
    let index = 11;
    this.state.rooms.forEach((element) => {
      let flatmate = {
        name: event.target[index++].value,
        people: event.target[index++].value,
        budget: event.target[index++].value,
      };
      body.flatmates.push(flatmate);
    });
    this.state.rooms.forEach((element) => {
      let room = {
        name: event.target[index++].value,
        peopleNumber: event.target[index++].value,
        size: event.target[index++].value,
      };
      body.rooms.push(room);
    });

    axios.post("http://localhost:4000/calculate", body).then((response) => {
      this.setState({
        result: response.data,
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleCalculate}>
          <label>What's your total rent? €</label>
          <input type="number"></input>
          <label> What's the total size of the flat? m²</label>
          <input type="number"></input>
          {this.maxRooms.map((ele, index) => {
            return (
              <button type="button" onClick={this.handleChanges}>
                {ele}
              </button>
            );
          })}

          <div>
            {this.state.rooms.map((ele, index) => {
              return <CalculateFlatmate key={index}></CalculateFlatmate>;
            })}
          </div>
          <div>
            {this.state.rooms.map((ele, index) => {
              return <CalculateRoom key={index}></CalculateRoom>;
            })}
          </div>

          <button type="submit"> Calculate!! </button>
        </form>
        <div>
            {this.state.result.map((ele, index) => {
              return <CalculateResult key={index} {...ele}></CalculateResult>;
            })}
          </div>
      </div>
    );
  }
}
export default Calculator;

import React, { Component } from "react";
import CalculateFlatmate from "./CalculateFlatmate";
import CalculateRoom from "./CalculateRoom";
import axios from "axios";
import CalculateResult from "./CalculateResult.js";
import "bootstrap/dist/css/bootstrap.css";

class Calculator extends Component {
  maxRooms = [2, 3, 4, 5, 6];
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
    let index = 7;
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

    axios.post(`${process.env.REACT_APP_API_URL}/calculate`, body).then((response) => {
      this.setState({
        result: response.data,
      });
    });
  };

  render() {
    return (
      <div className="wrapperCalculator">
        <div className="container">
          <div className="py-5 text-center">
            <h2>Divide Your Rent Fairly</h2>
            <p className="lead">
              When you’re sharing an apartment with roommates, it can be a
              challenge to decide who takes which bedroom, and at what price.
              Sit down with your roommates and use the calculator below to find
              the fair division.
            </p>
          </div>
          <form onSubmit={this.handleCalculate}>
            <div className="name">
            <div>
              <label>What's your total rent? €</label>
              <input type="number"></input>
              </div>
              <div>
              <label> What's the total size of the flat? m²</label>
              <input type="number"></input>
              </div>
              
              <label>Number of rooms in the flat</label>
              <div id="roomsNumber">
              {this.maxRooms.map((ele, index) => {
                return (
                  <button type="button" onClick={this.handleChanges}>
                    {ele}
                  </button>
                );
              })}</div>              
            </div>
            <hr/>
            <div className="users">
              {this.state.rooms.map((ele, index) => {
                return <CalculateFlatmate key={index}></CalculateFlatmate>;
              })}
            </div>
            <hr/>
            <div>
              {this.state.rooms.map((ele, index) => {
                return <CalculateRoom key={index}></CalculateRoom>;
              })}
            </div>

            <button className="btns" type="submit"> Calculate!! </button>
          </form>
          <div>
            {this.state.result.map((ele, index) => {
              return <CalculateResult  className="result" key={index} {...ele}></CalculateResult>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;

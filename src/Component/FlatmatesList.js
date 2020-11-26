import { render } from "@testing-library/react";
import React, { Component } from "react";
import service from "../api/service"
import MatchFlatmate from "./MatchFlatmate.js";

class FlatmatesList extends Component {
  state = {
    flatmates: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let list = {
      location: event.target[0].value,
      gender: event.target[1].value,
      maxBudget: event.target[2].value,
      hasPet:
        event.target[3].value === "indifferent" ? "" : event.target[3].value,
      isSmoking:
        event.target[4].value === "indifferent" ? "" : event.target[4].value,
      isWorking:
        event.target[5].value === "indifferent" ? "" : event.target[5].value,
      isStudying:
        event.target[6].value === "indifferent" ? "" : event.target[6].value,
    };

    service.getUsers(list)
      .then((response) => {
        this.setState({
          flatmates: response,
        });
      });
  };

  componentDidMount = () => {
    if (this.state.flatmates.length === 0) {
      service.getUsers({ limit: 20 })
        .then((response) => {          
          this.setState({
            flatmates: response,
          });
        });
    }
  };

  render() {
    return (
      <>
      <div className = "flatmatesList">
      <div className = "stickTheForm">
        <form className = "windowFit" onSubmit={this.handleSubmit}>
          <label>Zone</label>
          <input type="text" />
          <label>Gender</label>
          <select>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          <label>Maximum Budget</label>
          <input type="number" />
          <label>Pets</label>
          <select>
            <option value="indifferent">indifferent</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <label>Smoke</label>
          <select>
            <option value="indifferent">indifferent</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <label>Working</label>
          <select>
            <option value="indifferent">indifferent</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <label>Studying</label>
          <select>
            <option value="indifferent">indifferent</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>

          <button className="btnB"  >Search</button>
        </form>
        </div>
        <section>
          <div>
         <div className = "favoriteUsers-container">
         <div id="containerFlatList"  >
	<div className="row">
          {this.state.flatmates.map((element, index) => {
            return <MatchFlatmate key={index} {...element} />;
          })}
          </div>
          </div>
          </div>
          </div>
        </section>
        </div>
      </>
    );
  }
}

export default FlatmatesList;

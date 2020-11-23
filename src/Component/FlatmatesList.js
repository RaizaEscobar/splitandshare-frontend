import { render } from "@testing-library/react";
import React, { Component } from "react";
import axios from "axios";
import MatchFlatmate from "./MatchFlatmate.js";

class FlatmatesList extends Component {
    state={
        flatmates:[]
    }
  handleSubmit = (event) => {
    event.preventDefault();
    let list = {
      location: event.target[0].value,
      gender: event.target[1].value,
      maxBudget: event.target[2].value,
      hasPet: event.target[3].value === "indifferent" ? "" : event.target[3].value,
      isSmoking: event.target[4].value === "indifferent" ? "" : event.target[4].value,
      isWorking: event.target[5].value,
      isStudying: event.target[6].value,
    };

    axios.get("http://localhost:4000/users", {params: list}).then(response=>{
        this.setState({
            flatmates:response.data
        })
    });
  };

  render() {
    return (
        <>
      <form onSubmit={this.handleSubmit}>
        <label>Zone</label>
        <input type="text" />
        <label>Gender</label>
        <select>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <label>Budget</label>
        <input type="number" />
        <label>Pets</label>
        <select>
          <option value="no">No</option>
          <option value="yes">Yes</option>
          <option value="indifferent">indifferent</option>
        </select>
        <label>Smoke</label>
        <select>
          <option value="no">No</option>
          <option value="yes">Yes</option>
          <option value="indifferent">indifferent</option>
        </select>
        <label>Working</label>
        <select>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <label>Studying</label>
        <select>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <button>Search</button>
      </form>
      <section>
      {this.state.flatmates.map((element,index)=>{
          return <MatchFlatmate key={index} {...element} />
      })}
      

      </section>
</>

    );
  }
}

export default FlatmatesList;

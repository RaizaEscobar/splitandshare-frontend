import React, { Component } from "react";
import axios from "axios";
import FlatlistCard from "./FlatlistCard";

class Flatlist extends Component {
  state = {
    flats: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let list = {
      minPrice: event.target[0].value,
      maxPrice: event.target[1].value,
      rooms: event.target[2].value,
      restrooms: event.target[3].value,
      neighborhood: event.target[4].value,
      airconditioner:
        event.target[5].value === "indifferent" ? "" : event.target[5].value,
      elevator:
        event.target[6].value === "indifferent" ? "" : event.target[6].value,
      balcony:
        event.target[7].value === "indifferent" ? "" : event.target[7].value,
      squareMeters: event.target[8].value,
      furnished:
        event.target[9].value === "indifferent" ? "" : event.target[9].value,
    };

    axios
      .get("http://localhost:4000/flats", { params: list })
      .then((response) => {
        console.log(response);
        this.setState({
          flats: response.data,
        });
      });
  };

  componentDidMount = () => {
    if (this.state.flats.length === 0) {
      axios
        .get("http://localhost:4000/flats", { params: { limit: 20 } })
        .then((response) => {
          console.log(response.data);
          this.setState({
            flats: response.data,
          });
        });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Minimun Price</label>
          <input type="number" />
          <label>Maximum Price</label>
          <input type="number" />
          <label>Number of rooms</label>
          <input type="number" />
          <label>Number of bathrooms</label>
          <input type="number" />
          <label>Neighborhood</label>
          <input type="string" />
          <label>Air Conditioner</label>
          <select>
            <option value="indifferent">indifferent</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <label>Elevator</label>
          <select>
            <option value="indifferent">indifferent</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <label>Balcony</label>
          <select>
            <option value="indifferent">indifferent</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <label>Minimum square meters</label>
          <input type="number" />
          <label>Furnished</label>
          <select>
            <option value="indifferent">indifferent</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
          <button>Search</button>
        </form>

        <section>
          {this.state.flats.map((element, index) => {
            return <FlatlistCard key={index} {...element} />;
          })}
        </section>
      </div>
    );
  }
}

export default Flatlist;

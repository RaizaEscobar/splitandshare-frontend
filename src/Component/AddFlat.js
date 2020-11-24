import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

// import the service file since we need it to send (and get) the data to(from) server
import service from "../api/service";

class AddFlat extends Component {
  state = {
    title: "",
    description: "",
    flatImages: "",
    price: 0,
    contact: "",
    rooms: 0,
    restrooms: 0,
    neighborhood: "",
    airconditioner: false,
    elevator: false,
    balcony: false,
    parking: false,
    address: "",
    centralHeating: false,
    squareMeters: 0,
    furnished: false,
    terrace: false,
    swimmingPool: false,
    storeRoom: false,
    builtinWardrobes: false,
    redirect: "",
    id : this.props.match.params.id
  };

  

  componentDidMount = () => {
    if (this.id) {
      axios
        .get(`http://localhost:4000/flat/${this.id}`)
        .then((response) => {
          this.setState({ ...response.data });
        });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = async (e) => {
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    try {
      const res = await service.handleUpload(uploadData);

      // after the console.log we can see that response carries 'secure_url' which we can use to update the state
      this.setState({ flatImages: res.secure_url });
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  // this method submits the form
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (this.id) {
        await service.updateFlat(this.id, this.state);
      } else {
        const res = await service.saveNewFlat(this.state);
        this.setState({id: res._id})
      }
      this.setState({ redirect: `/flat/${this.id}` });
    } catch (error) {
      console.log("Error while adding the flat: ", error);
    }
  };

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to={this.state.redirect} />}
        <h2>New Flat</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Price € </label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Contact</label>
          <input
            type="text"
            name="contact"
            value={this.state.contact}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Rooms</label>
          <input
            type="number"
            name="rooms"
            value={this.state.rooms}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Bathrooms</label>
          <input
            type="number"
            name="restrooms"
            value={this.state.restrooms}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Neighborhood</label>
          <input
            type="text"
            name="neighborhood"
            value={this.state.neighborhood}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Airconditioner</label>
          <select name="airconditioner" onChange={(e) => this.handleChange(e)}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Square Meters:</label>
          <input
            type="text"
            name="squareMeters"
            value={this.state.squareMeters}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default withAuth(AddFlat);

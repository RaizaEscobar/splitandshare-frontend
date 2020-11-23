// components/AddMovie.js
import React, { Component } from "react";
import {withAuth} from "../lib/AuthProvider"

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
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = async (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    try {
      const res = await service.handleUpload(uploadData);

      console.log("response is: ", res);
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
      const res = await service.saveNewFlat(this.state, this.props.user._id);
      console.log("added: ", res);
      this.setState({
        title: "",
        description: "",
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
      });
      service.getFlats()
      // here you would redirect to some other page
    } catch (error) {
      console.log("Error while adding the flat: ", error);
    }
  };

  render() {
    return (
      <div>
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
          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button type="submit">Save new flat</button>
        </form>
      </div>
    );
  }
}

export default withAuth(AddFlat);
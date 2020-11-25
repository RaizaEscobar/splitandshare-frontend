import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
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
    id : this.props.match.params.id,
    disabled: false,
  };

  

  componentDidMount = () => {
    if (this.id) {
      service.getFlat(this.id)        
        .then((response) => {
          this.setState({ ...response });
        });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = async (e) => {
    this.setState({disabled: true})
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    try {
      const res = await service.handleUpload(uploadData);

      // after the console.log we can see that response carries 'secure_url' which we can use to update the state
      this.setState({ flatImages: res.secure_url, disabled: false });
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  // this method submits the form
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let id;
      if (this.id) {
        id = this.id;
        await service.updateFlat(this.id, this.state);
      } else {
        const res = await service.saveNewFlat(this.state);
        id = res._id
      }
      this.setState({ redirect: `/flat/${id}` });
    } catch (error) {
      console.log("Error while adding the flat: ", error);
    }
  };

  render() {
    return (
      <div>
      <div className = "flatmatesList" id="centerAddFlat"  >
        {this.state.redirect && <Redirect to={this.state.redirect} />}
        
        <br></br>
        <form id="addFlatForm" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Title</label>
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
          <label>Upload photo:</label>
          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <button type="submit" className= "btnB" disabled={this.state.disabled}>Save</button>
        </form>
        </div>
      </div>
    );
  }
}

export default withAuth(AddFlat);

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      disabled: false,
      redirect: "",
    };
  }

  componentDidMount = () => {
    service.getFlatmate(this.props.user._id).then((response) => {
      this.setState({ user: response });
    });
  };

  handleFileUpload = (event) => {
    this.setState({ disabled: true });
    const uploadData = new FormData();
    uploadData.append("imageUrl", event.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        this.setState({ disabled: false });
        this.setState({ user: { image: response.secure_url } });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,        
        [name]: value,
        searchingFor: {...this.state.user.searchingFor},
      },
    });
  };

  handleSearchingChange= (event) => {
    let { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        searchingFor:{
          ...this.state.user.searchingFor,
          [name]: value,
        }
          
      },
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    service.editUser(this.props.user._id, this.state.user).then((response) => {
      this.setState({ redirect: `/user/${this.props.user._id}` });
    });
  };

  render() {
    return (
      <div>
      {this.state.redirect && <Redirect to={this.state.redirect} />}
        <div className="flatmatesList" id="profileCntr">
          <form id="formEditProfile" onSubmit={(e) => this.handleFormSubmit(e)}>
            <div className="editProfContainer">
              <div className="firstCntr">
                <br></br>
                <div className="polaroid">
                  <a href="#">
                    <img
                      height="250"
                      src={this.state.user.image}
                      alt="ProfilePhoto"
                      title="ProfilePhoto"
                    />
                  </a>
                </div>
                <label>
                  {" "}
                  <b>Change profile picture:</b>{" "}
                </label>
                <br></br>
                <div>
                  <input
                    type="file"
                    name="image"
                    onChange={this.handleFileUpload}
                  />
                </div>
                <br></br>
                <label>
                  {" "}
                  <b>Name:</b>{" "}
                </label>
                <input
                  type="text"
                  name="username"
                  value={this.state.user.username}
                  onChange={(e) => this.handleChange(e)}
                />
                <label>
                  {" "}
                  <b>Gender</b>{" "}
                </label>
                <select
                  name="gender"
                  value={this.state.user.gender}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                <label>
                  {" "}
                  <b>Age</b>{" "}
                </label>
                <input
                  type="number"
                  name="age"
                  value={this.state.user.age}
                  onChange={(e) => this.handleChange(e)}
                />
                <label>
                  {" "}
                  <b>Max budget</b>{" "}
                </label>
                <input
                  type="number"
                  name="maxBudget"
                  value={this.state.user.maxBudget}
                  onChange={(e) => this.handleChange(e)}
                />
                <label>
                  {" "}
                  <b>Pets</b>{" "}
                </label>
                <select
                  name="hasPet"
                  value={this.state.user.hasPet}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <label>
                  {" "}
                  <b>Are you smoking?</b>{" "}
                </label>
                <select
                  name="isSmoking"
                  value={this.state.user.isSmoking}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <label>
                  {" "}
                  <b>Are you studying?</b>{" "}
                </label>
                <select
                  name="isStudying"
                  value={this.state.user.isStudying}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                <label>
                  {" "}
                  <b>Are you working?</b>{" "}
                </label>
                <select
                  name="isWorking"
                  value={this.state.user.isWorking}
                  onChange={(e) => this.handleChange(e)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="secondCntr">
                <br></br>
                <label>
                  {" "}
                  <h4>I am looking for</h4>{" "}
                </label>
                <br></br>
                <label>
                  {" "}
                  <b>Gender</b>{" "}
                </label>
                <select
                  name="gender"
                  value={
                    this.state.user.searchingFor
                      ? this.state.user.searchingFor.gender
                      : ""
                  }
                  onChange={(e) => this.handleSearchingChange(e)}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="indifferent">Indifferent</option>
                </select>
                <label>
                  {" "}
                  <b>Pets</b>{" "}
                </label>
                <select
                  name="pets"
                  value={
                    this.state.user.searchingFor
                      ? this.state.user.searchingFor.pets
                      : ""
                  }
                  onChange={(e) => this.handleSearchingChange(e)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  <option value="indifferent">Indifferent</option>
                </select>
                <label>
                  {" "}
                  <b>Smoke</b>{" "}
                </label>
                <select
                  name="smoke"
                  value={
                    this.state.user.searchingFor
                      ? this.state.user.searchingFor.smoke
                      : ""
                  }
                  onChange={(e) => this.handleSearchingChange(e)}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  <option value="indifferent">Indifferent</option>
                </select>
                <label>
                  {" "}
                  <b>Age between</b>{" "}
                </label>
                <input
                  type="number"
                  name="minAge"
                  value={
                    this.state.user.searchingFor
                      ? this.state.user.searchingFor.minAge
                      : ""
                  }
                  onChange={(e) => this.handleSearchingChange(e)}
                />
                <label>
                  {" "}
                  <b>and</b>{" "}
                </label>
                <input
                  type="number"
                  name="maxAge"
                  value={
                    this.state.user.searchingFor
                      ? this.state.user.searchingFor.maxAge
                      : ""
                  }
                  onChange={(e) => this.handleSearchingChange(e)}
                />
                <button
                  type="submit"
                  className="btnB"
                  disabled={this.state.disabled}
                >
                  Save your profile{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(EditProfile);

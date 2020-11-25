import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service"

export class EditProfile extends Component {
    constructor(props) {
        super(props);
    this.state = {
        user : {}
    }
  }

    componentDidMount = () => {
        service.getFlatmate(this.props.user._id)
        .then(response => {
            this.setState({user: response})
        }) 
    }

      handleFileUpload = (event) => {
        console.log("The file to be uploaded is: ", event.target.files[0]);
    
        const uploadData = new FormData();
        uploadData.append("imageUrl", event.target.files[0]);
    
        service
          .handleUpload(uploadData)
          .then((response) => {
            console.log("response is: ", response);
            this.setState({  user: {image: response.secure_url} });
          })
          .catch((err) => {
            console.log("Error while uploading the file: ", err);
          });
      };

       handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ user : {
             ...this.state.user, ...this.state.user.searchingFor,
            [name]: value} });
      }; 

      handleFormSubmit = (event) => {
        event.preventDefault();
        const {image,username, gender,age, maxBudget, hasPet, isSmoking, isStudying, isWorking, smoke, maxAge, minAge } = this.state.user;
        service.editUser(this.props.user._id, this.state.user).then(response => {
          console.log(response)
      })
      };
    
    
    render() {
        return (
            <div>
              <div className = "flatmatesList" id="profileCntr">
        <form id="formEditProfile" onSubmit={(e) => this.handleFormSubmit(e)}>
        <div className = "editProfContainer">
        <div className = "firstCntr">
          <br></br>
          <div className="polaroid">
      <a href="#" >
        <img height="250" src={this.state.user.image} alt="ProfilePhoto" title="ProfilePhoto" />
      </a>
    </div>
            <label> <b>Change profile picture:</b> </label>
            <br></br>
            <input type="file" name="image" onChange={this.handleFileUpload} />
            <br></br>
            <label> <b>Name:</b> </label>
            <input type="text" name="username" value={this.state.user.username} onChange={(e) => this.handleChange(e)} />
            <label> <b>Gender</b> </label>
            <select name="gender" value={this.state.user.gender} onChange={(e) => this.handleChange(e)}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>

          </select>
          <label> <b>Age</b> </label>
          <input type="number" name="age" value={this.state.user.age} onChange={(e) => this.handleChange(e)} />
          <label> <b>Max budget</b> </label>
          <input type="number" name="maxBudget" value={this.state.user.maxBudget} onChange={(e) => this.handleChange(e)} />
          <label> <b>Pets</b> </label>
            <select name="hasPet" value={this.state.user.hasPet} onChange={(e) => this.handleChange(e)} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
          </select>
          <label> <b>Are you smoking?</b> </label>
            <select name="isSmoking" value={this.state.user.isSmoking} onChange={(e) => this.handleChange(e)} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
          </select>
          <label> <b>Are you studying?</b> </label>
            <select name="isStudying" value={this.state.user.isStudying} onChange={(e) => this.handleChange(e)} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
          </select>
          <label> <b>Are you working?</b> </label>
            <select name="isWorking" value={this.state.user.isWorking} onChange={(e) => this.handleChange(e)} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
          </select> 
          </div>
          <div className = "secondCntr">
          <br>
          </br>
          <label> <h4>I am looking for</h4> </label>
          <br></br>
          <label> <b>Gender</b> </label>
            <select name="gender" value={this.state.user.searchingFor ?  this.state.user.searchingFor.gender : ""} onChange={(e) => this.handleChange(e)}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="indifferent">Indifferent</option>
          </select>
          <label> <b>Pets</b> </label>
            <select name="hasPet" value={this.state.user.searchingFor ? this.state.user.searchingFor.hasPet : "" } onChange={(e) => this.handleChange(e)} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  <option value="indifferent">Indifferent</option>
          </select>
          <label> <b>Smoke</b> </label>
            <select name="smoke" value={this.state.user.searchingFor ? this.state.user.searchingFor.smoke : ""} onChange={(e) => this.handleChange(e)} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  <option value="indifferent">Indifferent</option>
          </select>
          <label> <b>Age between</b> </label>
          <input type="number" name="minAge" value={this.state.user.searchingFor ? this.state.user.searchingFor.minAge : ""} onChange={(e) => this.handleChange(e)} />
          <label> <b>and</b> </label>
          <input type="number" name="maxAge" value={this.state.user.searchingFor ? this.state.user.searchingFor.maxAge : ""} onChange={(e) => this.handleChange(e)} />
          <button type="submit" className="btnB">Save your profile </button>
          </div>
          </div>
        
        </form>
        </div>
            </div>
        )
    }
}

export default withAuth(EditProfile)

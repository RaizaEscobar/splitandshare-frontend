import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

export class EditProfile extends Component {
    constructor(props) {
        super(props);
    this.state = {
        user : {}
    }
  }

    componentDidMount = () => {
        axios.get(`http://localhost:4000/profile/${this.props.user._id}`)
        .then(response => {
            this.setState({user: response.data})
        }) 
    }

      handleFileUpload = (event) => {
        console.log("The file to be uploaded is: ", event.target.files[0]);
    
        const uploadData = new FormData();
        uploadData.append("image", event.target.files[0]);
    
        this.props
          .handleUpload(uploadData)
          .then((response) => {
            console.log("response is: ", response);
            this.setState({ image: response.secure_url });
          })
          .catch((err) => {
            console.log("Error while uploading the file: ", err);
          });
      };

       handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({ user : {
             ...this.state.user,
            [name]: value} });
      }; 

      handleFormSubmit = (event) => {
        event.preventDefault();
        const {image,username, gender,age, maxBudget, hasPet, isSmoking, isStudying, isWorking} = this.state.user;
        axios.post(`http://localhost:4000/improveMyProfile/${this.props.user._id}`, this.state.user).then(response => {
            console.log(response.data)
        })
      };
    
    
    render() {
        return (
            <div>
     <h1>Edit Profile</h1>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          
            <label> <b>Profile picture:</b> </label>
            <input type="file" name="image" onChange={this.handleFileUpload} />
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
          <label> <h4>I am looking for</h4> </label>
          <label> <b>Gender</b> </label>
            <select name="gender" value={this.state.user.searchingFor.gender} onChange={(e) => this.handleChange(e)}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="indifferent">Indifferent</option>
          </select>
          <label> <b>Pets</b> </label>
            <select name="hasPet" value={this.state.user.searchingFor.pets} onChange={(e) => this.handleChange(e)} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  <option value="indifferent">Indifferent</option>
          </select>
          <label> <b>Smoke</b> </label>
            <select name="smoke" value={this.state.user.searchingFor.smoke} onChange={(e) => this.handleChange(e)} >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  <option value="indifferent">Indifferent</option>
          </select>
          <button type="submit">Save your profile </button>
        </form>
            </div>
        )
    }
}

export default withAuth(EditProfile)

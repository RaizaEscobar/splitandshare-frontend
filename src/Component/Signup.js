import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	

class Signup extends Component {
  state = { email: "", password: "", userType: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password, userType  } = this.state;
    console.log('Signup -> form submit', { email, password, userType });

    this.props.signup({ email, password, userType });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, userType } = this.state;
    console.log(this.props)
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <label>Are you looking for a flat or are you a flat owner?</label>  
          <select value={userType} onChange={this.handleChange} >
                  <option value="Flat Hunter">Flat Hunter</option>
                  <option value="Flat Owner">Flat Owner</option>
          </select>

          <input type="submit" value="Signup" />
        </form>
        {this.props.message}
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>


      </div>
    );
  }
}

export default withAuth(Signup);			            

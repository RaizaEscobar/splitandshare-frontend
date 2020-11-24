import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

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
       <div class="container-fluid">
       <div class="row main-content bg-success text-center">
       <div class="col-md-4 text-center company__info">
       <span class="company__logo"><h2> <FontAwesomeIcon icon={faHome} /></h2></span>
       <h4 class="company_title">Split and Share</h4>
       </div>
       <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
       <div class="container-fluid">
       <div class="row">
      <h2>Sign Up</h2>
      	</div>
        <div class="row">
        <form onSubmit={this.handleFormSubmit}>
        <div class="row">
          <input type="email" name="email"  className="form__input"  placeholder="Email" value={email} onChange={this.handleChange} />
          </div>
          <div class="row">
          <input type="password" name="password"  className="form__input" placeholder="Password" value={password} onChange={this.handleChange} />
          </div>
          <label>Are you looking for a flat or are you a flat owner?</label>  
          <div className = "select-container">
          <select name="userType" value={userType} className="btnSelect"  onChange={this.handleChange} >
                  <option value="Flat Hunter">Flat Hunter</option>
                  <option value="Flat Owner">Flat Owner</option>
          </select>
          </div>
          <input type="submit" className="btnB"  value="Signup" />
        </form>
        {this.props.message}
        <div class="row">
        <p>Already have an account? </p>
        <Link to={"/login"}> Login</Link>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);			            

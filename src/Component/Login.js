import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider.js";	
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log('Login -> form submit', { email, password });
    this.props.login({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
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
      <h2>Log In</h2>
      	</div>
        <div class="row">
        <form onSubmit={this.handleFormSubmit} class="form-group">
        <div class="row">
          <input type="email" name="email" className="form__input"  placeholder="Email" value={email} onChange={this.handleChange}/>
          </div>
          <div class="row">
          <input type="password" name="password" className="form__input" placeholder="Password" value={password} onChange={this.handleChange} />
          </div>
          <div class="row">
          <input type="submit" className="btnB"  value="Login"  />
          </div>
        </form>
       
        {this.props.message}
        </div>
        <div class="row">
						<p>Don't have an account? <Link to={"/signup"}> Register here</Link></p>
					</div>
        </div>
        </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default withAuth(Login);	

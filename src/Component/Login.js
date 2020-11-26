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
    this.props.login({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;    
    return (
      <div className = "login-container">
      <div className="container-fluid" id="centerContainer">
      <div className="row main-content bg-success text-center">
      <div className="col-md-4 text-center company__info">
      <span className="company__logo"><h2> <FontAwesomeIcon icon={faHome} style={{color: 'white'}}/></h2></span>
      <h4 className="company_title">Split and Share</h4>
      </div>
      <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
      <div className="container-fluid">
      <div className="row">
      <h2>Log In</h2>
      	</div>
        <div className="row">
        <form onSubmit={this.handleFormSubmit} className="form-group">
        <div className="row">
          <input type="email" name="email" className="form__input"  placeholder="Email" value={email} onChange={this.handleChange}/>
          </div>
          <div className="row">
          <input type="password" name="password" className="form__input" placeholder="Password" value={password} onChange={this.handleChange} />
          </div>
          <div className="row">
          <input type="submit" className="btnB"  value="Login"  />
          </div>
        </form>
       
        {this.props.message}
        </div>
        <div className="row">
						<p style={{color: 'black'}}>Don't have an account? <Link to={"/signup"}> Register here</Link></p>
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

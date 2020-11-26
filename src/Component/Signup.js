import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Signup extends Component {
  state = { email: "", password: "", userType: "Flat Hunter" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password, userType } = this.state;    

    this.props.signup({ email, password, userType });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, userType } = this.state;    
    return (
      <div>
        <div className="container-fluid" id="centerContainer">
          <div className="row main-content bg-success text-center">
            <div className="col-md-4 text-center company__info">
              <span className="company__logo">
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faHome} style={{ color: "white" }} />
                </h2>
              </span>
              <h4 className="company_title">Split and Share</h4>
            </div>
            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
              <div className="container-fluid">
                <div className="row">
                  <h2>Sign Up</h2>
                </div>
                <div className="row">
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="row">
                      <input
                        type="email"
                        name="email"
                        className="form__input"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="password"
                        name="password"
                        className="form__input"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <label style={{width:"100%"}}>
                      Are you looking for a flat or are you a flat owner?
                    </label>
                    <div className="select-container">
                      <select
                        name="userType"
                        value={userType}
                        className="btnSelect"
                        onChange={this.handleChange}
                      >
                        <option value="Flat Hunter">Flat Hunter</option>
                        <option value="Flat Owner">Flat Owner</option>
                      </select>
                    </div>
                    <input type="submit" className="btnB" value="Signup" />
                  </form>
                  {this.props.message}
                  <div className="row">
                    <p style={{ color: "black" }}>Already have an account? </p>
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

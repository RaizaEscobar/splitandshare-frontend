import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withAuth } from "../lib/AuthProvider";
import logo from "../images/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCalculator,
  faSignOutAlt,
  faUserFriends,
  faHouseUser,
  faUserPlus,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

function NavbarItem(props) {
  return (
    <li class="nav-item">
      <Link to={props.link} className="nav-link text-dark font-italic bg-light">
        <FontAwesomeIcon icon={props.icon} style={{ marginRight: "10px" }} />
        {props.title}
      </Link>
    </li>
  );
}

function NavbarCategory(props) {
  return (
    <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
      {props.title}
    </p>
  );
}

class Navbar extends Component {
  state = {
    activeMenu: false,
  };

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };

  render() {
    return (
      <nav
        className={`vertical-nav bg-white ${
          this.props.isActive ? "active" : ""
        }`}
        id="sidebar"
      >
        <div class="py-4 px-3 mb-4 bg-light">
          <div class="media d-flex align-items-center">
            <div class="media-body">
            {this.props.user && <img src={this.props.user.image} alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm"/>}
              {this.props.user && this.props.user.username !== "" && (
                <h4 class="m-0">{`Hola, ${this.props.user.username}`}</h4>
              )}
            </div>
          </div>
        </div>
        <NavbarCategory title="MAIN" />
        <ul class="nav flex-column bg-white mb-0">
          <NavbarItem title="Home" link="/" icon={faHome} />
          {this.props.user && (
            <NavbarItem
              title="Profile"
              link={`/user/${this.props.user._id}`}
              icon={faUser}
            />
          )}
          <NavbarItem
            title="Calculator"
            link="/calculator"
            icon={faCalculator}
          />
          {this.props.user && (
            <div onClick={this.props.logout} className="nav-link text-dark font-italic bg-light link">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ marginRight: "10px" }}
              />
              Log out
            </div>
          )}
          {!this.props.user && <NavbarItem title="Log in" link="/login" icon={faSignInAlt}/>}
          {!this.props.user && <NavbarItem title="Sign up" link="/signup" icon={faUserPlus} />}
        </ul>
        <NavbarCategory title="SEARCH" />
        <ul class="nav flex-column bg-white mb-0">
          <NavbarItem
            title="Find Flatmates"
            link="/flatmates"
            icon={faUserFriends}
          />
          <NavbarItem title="Find Flats" link="/flats" icon={faHouseUser} />
        </ul>
      </nav>
    );
  }
}

export default withAuth(Navbar);

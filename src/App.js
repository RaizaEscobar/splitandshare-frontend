import "./App.css";
import logo from "./images/logo.png";
import Navbar from "./Component/Navbar.js";
import "bulma/css/bulma.css";
import Calculator from "./Component/Calculator.js";
import Signup from "./Component/Signup.js";
import Login from "./Component/Login.js";
import { Route, Switch } from "react-router-dom";
import AnonRoute from "./Component/AnonRoute.js";
import PrivateRoute from "./Component/PrivateRoute.js";
import Private from "./Component/Private.js";
import AuthProvider from "./lib/AuthProvider.js";
import DashboardHunter from "./Component/DashboardHunter.js";
import DetailFlatmate from "./Component/DetailFlatmate";
import DashboardOwner from "./Component/DashboardOwner.js";
import FlatDetails from "./Component/FlatDetails.js";
import FlatmatesList from "./Component/FlatmatesList.js";
import AddFlat from "./Component/AddFlat.js";
import Flatlist from "./Component/Flatlist.js";
import FavoritesUsers from "./Component/FavoritesUsers.js";
import FavoritesFlats from "./Component/FavoritesFlats.js";
import EditProfile from "./Component/EditProfile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import MyListings from './Component/MyListings'
import Home from './Component/Home.js'

function App(props) {
  const [isActive, setIsActive] = useState(true)
  function onToggle(){
    setIsActive(!isActive);
  }
  const style = {
    display:"block",
    top: "10px",
    left: isActive ? "10px" : "300px",
     }
 
  return (
    <AuthProvider>
      <div className="body">
        <Navbar isActive={isActive}/>
        <div className={`page-content p-5 ${isActive ? "active" : ""}`} id="content">
        <button
          id="sidebarCollapse"
          type="button"
          className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          style={style}
          onClick={onToggle}
          >
         <FontAwesomeIcon icon={faBars} />
          <small className="text-uppercase font-weight-bold">Menu</small>
        </button>
        <img src={logo} alt="logo" className="logo" />
        <Switch>
          <Route exact path="/calculator" component={Calculator} />
          <AnonRoute path="/signup" component={Signup} />
          <AnonRoute path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/dashboardHunter" component={DashboardHunter} />
          <PrivateRoute path="/dashboardOwner" component={DashboardOwner} />
          <PrivateRoute exact path="/flat/:id" component={FlatDetails} />
          <PrivateRoute path="/addMyFlat" component={AddFlat} />
          <PrivateRoute exact path="/flat/edit/:id" component={AddFlat} />
          <PrivateRoute exact path="/flats" component={Flatlist} />
          <PrivateRoute exact path="/myListings" component={MyListings}/> 
          <Route exact path="/flats/favorites" component={FavoritesFlats} />
          <Route exact path="/users/favorites" component={FavoritesUsers} />
          <Route exact path="/user/:id" component={DetailFlatmate} />
          <PrivateRoute path="/improveMyProfile" component={EditProfile} />
          <Route exact path="/flatmates" component={FlatmatesList} />
        </Switch>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

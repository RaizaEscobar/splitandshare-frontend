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
import Chat from './Component/Chat.js';
import Messages from "./Component/Messages";

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
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />          
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/dashboardHunter" component={DashboardHunter} />
          <PrivateRoute exact path="/dashboardOwner" component={DashboardOwner} />
          <PrivateRoute exact path="/flat/:id" component={FlatDetails} />
          <PrivateRoute exact path="/addMyFlat" component={AddFlat} />
          <PrivateRoute exact path="/flat/edit/:id" component={AddFlat} />
          <PrivateRoute exact path="/flats" component={Flatlist} />
          <PrivateRoute exact path="/myListings" component={MyListings}/> 
          <PrivateRoute exact path="/flats/favorites" component={FavoritesFlats} />
          <PrivateRoute exact path="/users/favorites" component={FavoritesUsers} />
          <PrivateRoute exact path="/user/:id" component={DetailFlatmate} />
          <PrivateRoute exact path="/improveMyProfile" component={EditProfile} />
          <PrivateRoute exact path="/flatmates" component={FlatmatesList} />
          <PrivateRoute exact path="/chat/:id" component={Chat} />
          <PrivateRoute exac path="/myMessages" component={Messages} />
        </Switch>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

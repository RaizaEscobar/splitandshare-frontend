import './App.css';
import Navbar from "./Component/Navbar.js"
import 'bulma/css/bulma.css';
import Calculator from './Component/Calculator.js';
import Signup from './Component/Signup.js';
import Login from './Component/Login.js';
import { Route, Switch } from 'react-router-dom';
import AnonRoute from './Component/AnonRoute.js';
import PrivateRoute from './Component/PrivateRoute.js';
import Private from './Component/Private.js';
import AuthProvider from "./lib/AuthProvider.js";
import DashboardHunter from './Component/DashboardHunter.js'
import DetailFlatmate from './Component/DetailFlatmate';
import DashboardOwner from './Component/DashboardOwner.js'
import FlatDetails from './Component/FlatDetails.js'
import FlatmatesList from './Component/FlatmatesList.js';
import AddFlat from './Component/AddFlat.js';
import Flatlist from './Component/Flatlist.js'
import FavoritesUsers from './Component/FavoritesUsers.js'
import FavoritesFlats from './Component/FavoritesFlats.js'
import EditProfile from './Component/EditProfile'
import MyListings from './Component/MyListings'


let styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  margin: '100px'
};


function App(props) {
let pages=[{
  page:'signup',
  link:'signup' 
},
{ page:'login',
  link: 'login'
},
{ page:'my profile',
  link: `user`
},
{ page:'find flat',
  link: 'flats'
},
{ page:'find flatmate',
  link: 'flatmates'
},
{ page:'messages',
  link: 'messages'
},
{ page:'calculator',
  link: 'calculator'
}]

  return (
    <AuthProvider>   
    <div style={styles}>
    <Navbar pages={pages}/>
    <Switch>
      <Route exact path='/calculator' component={Calculator} />
      <AnonRoute path="/signup" component={Signup} />
      <AnonRoute path="/login" component={Login} />	
      <PrivateRoute path="/private" component={Private} />
     <PrivateRoute exact path="/" component={DashboardHunter}/>
     <PrivateRoute path="/dashboardOwner" component={DashboardOwner} />
     <PrivateRoute exact path="/flat/:id" component={FlatDetails} />
     <PrivateRoute path="/addMyFlat" component={AddFlat} />
     <PrivateRoute exact path="/flat/edit/:id" component={AddFlat} />
     <PrivateRoute exact path="/flats" component={Flatlist}/>
     <PrivateRoute exact path="/myListings" component={MyListings}/> 
     <Route exact path="/flats/favorites" component={FavoritesFlats}/>
     <Route exact path="/users/favorites" component={FavoritesUsers}/>
      <Route exact path="/user/:id" component={DetailFlatmate}/>
     <PrivateRoute path="/improveMyProfile" component={EditProfile}/>
      <Route exact path="/flatmates" component={FlatmatesList} />
      </Switch>
    </div>
    </AuthProvider>   
  );
}

export default App;

import logo from './logo.svg';
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
import AuthProvider from "./lib/AuthProvider";
import DashboardHunter from './Component/DashboardHunter.js'
import DetailFlatmate from './Component/DetailFlatmate';
import DashboardOwner from './Component/DashboardOwner.js'
import FlatDetails from './Component/FlatDetails.js'
import FlatmatesList from './Component/FlatmatesList';
import AddFlat from './Component/AddFlat';


let styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  margin: '100px'
};
function App() {
let pages=[{
  page:'signup',
  link:'signup' 
},
{ page:'login',
  link: 'login'
},
{ page:'my profile',
  link: 'profile'
},
{ page:'find flat',
  link: 'flat'
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
     <Route exact path="/" component={DashboardHunter}/>
     <PrivateRoute path="/dashboardOwner" component={DashboardOwner} />
     <PrivateRoute path="/flat/:id" component={FlatDetails} />
     <PrivateRoute path="/addMyFlat" component={AddFlat} />
      <Route exact path="/flatmate/:id" component={DetailFlatmate}/>
      <Route exact path="/flatmates" component={FlatmatesList} />
      </Switch>
    </div>
    </AuthProvider>   
  );
}

export default App;

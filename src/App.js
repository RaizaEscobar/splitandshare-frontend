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
  link: 'flatmate'
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
      <Route exact path="/flatmate/:id" component={DetailFlatmate}/>
      </Switch>
    </div>
    </AuthProvider>   
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar.js"
import 'bulma/css/bulma.css';
import Calculator from './Component/Calculator';
import DashboardHunter from './Component/DashboardHunter.js'
import { Route, Switch } from 'react-router-dom';
import DetailFlatmate from './Component/DetailFlatmate';



let styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  margin: '100px'
};

let pages=[{
  page:'signup',
  link:'signup' 
},
{ page:'login',
  link: 'login'
},
{ page:'logout',
  link: 'logout'
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

function App() {
  return (
    <div style={styles}>
    <Navbar pages={pages}/>

    <Switch>
    <Route exact path="/calculator" component={Calculator}/>
    <Route exact path="/" component={DashboardHunter}/>
    <Route exact path="/flatmate/:id" component={DetailFlatmate}/>
      </Switch>
    </div>
  );
}

export default App;

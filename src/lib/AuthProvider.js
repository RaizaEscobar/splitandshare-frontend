// lib/AuthProvider.js

import React from "react";
/* import { withRouter } from 'react-router' */
import auth from "./auth-service";	// Importamos funciones para llamadas axios a la API
const { Consumer, Provider } = React.createContext();


// HOC para crear Consumer
const withAuth = (WrappedComponent, props) => {

    return class extends React.Component {
      render() {
        
        return (
          <Consumer>
  {/* El componente <Consumer> provee un callback que recibe el "value" con el objeto Providers */}  
          { 
            ({login, signup, user, logout, isLoggedin, message}) => {
            return (
              <WrappedComponent 
                login={login} 
                signup={signup} 
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                message={message}
                {...this.props} />
            );
          }}
          </Consumer>
        );
      }
    };
  };

// Provider
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true, message: "" };

componentDidMount() {
    auth.me()
    .then((user) => this.setState({ isLoggedin: true, user: user, isLoading: false }))
    .catch((err) => this.setState({ isLoggedin: false, user: null, isLoading: false }));
  }

  signup = (user) => {
    const { email, password, userType} = user;
    
    auth.signup({ email, password, userType })
      .then((user) => this.setState({ isLoggedin: true, user}) )
      .catch(({response}) => {
      this.setState({ message: response.data.message})});
  };


  login = (user) => {
    const { email, password } = user;

    auth.login({ email, password })
      .then((user) => this.setState({ isLoggedin: true, user }))
      .catch(({response}) => {      
      this.setState({ message: response.data.message})});
  };


  logout = () => {
    auth.logout()
      .then(() => this.setState({ isLoggedin: false, user: null })/* , this.props.history.push('/') */ )
      .catch((err) => console.log(err));
  };

	
  render() {
    const { isLoading, isLoggedin, user, message } = this.state;
    const { login, logout, signup } = this;
    
    return (
      isLoading ? 
      <div>Loading</div> 
      :
      (<Provider value={{ isLoggedin, user, login, logout, signup, message}} >
         {this.props.children}
      </Provider>)
    )	/*<Provider> "value={}" datos que estarán disponibles para todos los componentes <Consumer> */
  }
}

export { Consumer, withAuth };		//  <--	RECUERDA EXPORTAR  ! ! !

export default AuthProvider;		//	<--	RECUERDA EXPORTAR  ! ! !
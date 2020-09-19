import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listing from './containers/Listing'
import Login from './components/Login'
 import Add from './components/Add'
 import Details from './containers/Details'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

// Write ProtectedRoute function here
// const ProtectedRoute = ({component: Component, ...rest}) => {
//   return (
//       <Route
//       {...rest}
//       render={(props) => checkAuth()
//           ? <Component {...props} />
//           : <Redirect to="/login" />}
//       />
//   )
// }

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/login" component={Login} />
            <Route path="/details" component={Details}/> 
             <Route path="/add" component={Add} />      
        </Switch>
    );
};

export default Router;
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listing from './containers/Listing'
import Login from './containers/Login'
 import Add from './containers/Add'
 import Details from './containers/Details'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/login" />}
      />
  )
}

const Router = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={NewListing} /> */}
            <Route exact path="/" component={Listing}/>
            <Route path="/login" component={Login} />
            <Route path="/details/:id" component={Details}/> 
             <ProtectedRoute path="/add" component={Add} />      
        </Switch>
    );
};

export default Router;


import React, { Component } from 'react' //new
//import React from 'react' //uncomment if retrieving old code
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
  import { Link } from 'react-router-dom'
// import {Link} from 'react-router'
//   import Link from '@material-ui/core/Link'

class Navigation extends Component {
    constructor(){//new
      super();//new
    this.state = {  //new "this.state"
      loggedIn : false, //new
        };   
    this.changeState = this.changeState.bind(this);
    }

    changeState = () => {
        this.setState({
        loggedIn : !this.state.login
        });
      };
      //const Navigation = () => {
          render(){ //new
            const {loggedIn} = this.state;
    return (
             

 <div>
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Small Austin Businesses
                </Typography>
               <ul className="nav-list">
                   <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>  
                    </li>
                    <li className="nav-list-item">
                         <Link to="/login"
                         onClick={this.changeState}
                         >{loggedIn ? "Login" : "Log Out"}</Link>  
                        
                    </li>      
               </ul>
            </Toolbar>
        </AppBar>
 </div>    
)
 }
}

export default Navigation
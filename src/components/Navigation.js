import React, { Component } from 'react' //new
//import React from 'react' //uncomment if retrieving old code
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
  import { Link } from 'react-router-dom'
// import {Link} from 'react-router'
//   import Link from '@material-ui/core/Link'

const Navigation = (props) => {
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
                        <Link to="/">Listings</Link>  
                    </li> 
                    <li className="nav-list-item">
                         <Link to="/add"
                         >{props.loggedIn && "Add"}</Link>  
                    </li> 
                    {/* if props.logged = true display "log out" else display "login" */}
                    {props.loggedIn ?    
                         <li className="nav-list-item">
                         <Link to='login'  onClick={() => {
                            document.cookie = "loggedIn=";
                            // window.location.replace("/");
                            props.loggedOut();
                          }}
                        >Log Out</Link>
                         </li>     
                         :
                         <li className="nav-list-item">
                         <Link to="/login"
                         >Login</Link>  
                    {/* >{props.loggedOut && 'Login'}</Link>     */}
                    </li>   
                         }
               
                    
             
                 
               </ul>
            </Toolbar>
        </AppBar>
    </div>    
    )
}


export default Navigation
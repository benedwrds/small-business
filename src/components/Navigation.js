import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
  import { Link } from 'react-router-dom'
// import {Link} from 'react-router'
//   import Link from '@material-ui/core/Link'

 const Navigation = () => {
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
                         <Link to="/login">Login</Link>  
                         {/* Not showing up */}
                    </li>      
               </ul>
            </Toolbar>
        </AppBar>
 </div>    
)
 }

export default Navigation
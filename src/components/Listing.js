import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
// import Chart from '../containers/Chart'
// import Total from '../containers/Total'
import AddBusiness from '../containers/Add'
 
const Listing = (props) => {
  //only works on functional components
  const { loggedIn, businesses } = props
  //const loggedIn = props.loggedIn 
  //const businesses = props.businesses

    return (
         <Container maxWidth="lg">
            {/* <h4>Welcome, {props.user.username}</h4> */}
             <div className="flex-container">
                {/* <Chart />
                <Total /> */}
                {/* <AddBusiness businessTotal={businesses.length} /> */}
            </div> 
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        {loggedIn && (
                        <TableCell>Delete</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                {businesses.map((business, idx) => (
                  
                    <TableRow key={idx}>
                        <TableCell><Link to={`/details/${business.id}`}>{business["name"]}</Link></TableCell>
                        <TableCell>{business["description"]}</TableCell>
                        <TableCell>{business["hours"]}</TableCell>
                        <TableCell>{business["address"]}</TableCell>
                        {loggedIn && (
                          <TableCell>
                           <DeleteIcon
                            // add onClick method here
                              onClick = {() => props.removeBusiness(idx) }
                              className="icon text-red" /> 
                          </TableCell>
                        )}

                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>

        
    )
}

export default Listing

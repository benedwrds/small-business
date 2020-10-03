import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Toolbar, 
    Link
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
// import Chart from '../containers/Chart'
// import Total from '../containers/Total'
import AddBusiness from '../containers/AddBusiness'
 
const Listing = (props) => {
    return (
         <Container maxWidth="lg">
            {/* <h4>Welcome, {props.user.username}</h4> */}
             <div className="flex-container">
                {/* <Chart />
                <Total /> */}
                <AddBusiness businessTotal={props.businesses.length} />
            </div> 
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((business, idx) => (
                  
                    <TableRow key={idx}>
                        <TableCell><Link href ={`/details/${business.id}`}>{business["name"]}</Link></TableCell>
                        <TableCell>{business["description"]}</TableCell>
                        <TableCell>{business["hours"]}</TableCell>
                        <TableCell>{business["address"]}</TableCell>
                        {props.loggedIn && (
                          <TableCell>
                          {/* <DeleteIcon
                            // add onClick method here
                              onClick = {() => props.removeBusiness(idx) }
                              className="icon text-red" />  */}
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

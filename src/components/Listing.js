import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Toolbar
} from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete'
// import Chart from '../containers/Chart'
// import Total from '../containers/Total'
// import AddCar from '../containers/AddCar'
 
const Listing = (props) => {
    return (
         <Container maxWidth="lg">
            {/* <h4>Welcome, {props.user.username}</h4> */}
            {/* <div className="flex-container">
                <Chart />
                <Total />
                <AddCar carTotal={props.cars.length} />
            </div> */}
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
                        <TableCell>{business["name"]}</TableCell>
                        <TableCell>{business["description"]}</TableCell>
                        <TableCell>{business["hours"]}</TableCell>
                        <TableCell>{business["address"]}</TableCell>
                        <TableCell>
                            {/* <DeleteIcon
                                // add onClick method here
                                onClick = {() => props.removeCar(idx) }
                                className="icon text-red" /> */}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing
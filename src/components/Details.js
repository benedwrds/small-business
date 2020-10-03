//Business Name
//Description
//Hours
import React from 'react';
import Typography from '@material-ui/core/Typography';

const Details = (props) => {
  const id = props.match.params.id
  const business = props.businesses.find(b => b.id == id)
  return (
  
      <div style={{marginLeft: "40%", marginTop: "1%"
      }}>
        <Typography variant="h6"
        style={{fontWeight: "bold"}}>
          {business.name} 
        </Typography>
        <Typography 
        style={{fontWeight: "bold"}}>
          {business.address}
        </Typography>
        <Typography 
        style={{fontWeight: "bold"}}>
          {business.hours}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {business.description}
          {/* {props.businesses[0].description} */}
        </Typography>    
      </div>
    )
  }


export default Details;


// {props.businesses.map((business, idx) => (
//     key={idx}
//         {/* <TableCell>{business["name"]}</TableCell> */}
//         business["name"]
//         business["description"]
//         business["hours"]
//         business["address"]
 
// ))}




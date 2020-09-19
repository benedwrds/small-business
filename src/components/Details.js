//Business Name
//Description
//Hours
import React from 'react';

const Details = (props) => {

  return (
    
      <div>
        <p>Hello</p>
        {props.businesses[0].name}
        <br></br>
        {props.businesses[0].description}
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




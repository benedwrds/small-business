//Business Name
//Description
//Hours
import React from 'react';

const Details = (props) => {
  const id = props.match.params.id
  const business = props.businesses.find(b => b.id == id)
  return (
    
      <div>
        <p>Hello</p>
         {business.name} 
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




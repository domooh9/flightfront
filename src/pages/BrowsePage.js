import React from 'react';
import Flight from "../components/Flight";
import "./BrowsePage.css"

import { Link } from "react-router-dom";

const BrowsePage = (props) => {
  const { flights } = props;
  
  return (
    <>
   <h2 className="half-underline" style={{color: '#00171F'}}>Available flights for your route </h2>
    <Link  to="/" className="fiig">Go back</Link>
    <Link  to="/page" className="iig">Track Your Flights</Link> 
     <div className="flight-list">
      {flights.map((flight, index) => (
        <Flight key={index} {...flight} />
      ))}
    </div>
    
    </>
   
  );
};

export default BrowsePage;

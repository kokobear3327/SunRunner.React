import './business.css';
import React from 'react'
import business from '../images/Business.png';


// So you would add an onclick event where the router would take you to the route specified. 

function Business() {
    return (
        <img className="business" src={ business } alt="text" />
    );
  }
  
  export default Business;
import './medical-info-button.css';
import React from 'react'
import { Link } from "react-router-dom";


// So you would add an onclick event where the router would take you to the route specified. 

function MedicalInfoButton() {
    function handleClick() {
    console.log('handleClick Called');
        // Routing logic to take you to the treeView
    }
    return (
        <Link to="/Medical-Info">
        <button onClick={handleClick} className="medical-info-button">Medical Info</button>
        </Link>
    );
  }
  
  export default MedicalInfoButton;
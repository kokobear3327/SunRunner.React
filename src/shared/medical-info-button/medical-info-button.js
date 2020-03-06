import React from 'react'
import './medical-info-button.css'


// So you would add an onclick event where the router would take you to the route specified. 

function MedicalInfoButton() {
    return (
        <div className="medical-info-container">
        <button className="medical-info">Medical Info</button>
        </div>
    );
  }
  
  export default MedicalInfoButton;
import './medical-info-button.css';
import React from 'react'


// So you would add an onclick event where the router would take you to the route specified. 

function MedicalInfoButton() {
    return (
        <div class="business-medical-info-container">
        <button className="business-medical-info">Medical Info</button>
        </div>
    );
  }
  
  export default MedicalInfoButton;
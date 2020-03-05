import './doctors-button.css';
import React from 'react'


// So you would add an onclick event where the router would take you to the route specified. 

function DoctorsButton() {
    return (
        <div class="business-doctors-button-container">
        <button className="business-doctors-button">Doctors</button>
        </div>
    );
  }
  
  export default DoctorsButton;
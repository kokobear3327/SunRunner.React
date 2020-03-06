import React from 'react'


// So you would add an onclick event where the router would take you to the route specified. 

function MedicalInfoButton() {
    return (
        <div className="medical-info-container">
        <button className="medical-info">Medical Info</button>
        <style jsx>{` 

        .medical-info-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .medical-info {
            width: 187px;
            height: 45px;
            position: relative;
            font-family: Montserrat;
            font-size: 25px;
            right: 452px;
            bottom: 399px;
            background-color: black;
            color: white;
            border: black;
            background: linear-gradient(to bottom, rgb(212,212,245), rgb(47, 164, 231));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    
      `}</style>
        </div>
    );
  }
  
  export default MedicalInfoButton;
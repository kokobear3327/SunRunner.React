import './business.css';
import React from 'react'
import business from '../images/Business.png';
import ConsumerDock from '../shared/consumer-dock/consumer-dock';
import TreeButton from '../shared/tree-button/tree';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';


// So you would add an onclick event where the router would take you to the route specified. 

function Business() {
    return (
        <div className="">
        <img className="business-image" src={ business } alt="text" />
        <ConsumerDock></ConsumerDock>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        </div>
    );
  }
  
  export default Business;
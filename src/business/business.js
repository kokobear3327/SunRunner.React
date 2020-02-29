import './business.css';
import React from 'react'
import business from '../images/Business.png';
import ConsumerDock from '../shared/consumer-dock/consumer-dock';
import TreeButton from '../shared/tree-button/tree-button';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import BusinessRemainingButtons from '../shared/business/business-remaining-buttons';


// So you would add an onclick event where the router would take you to the route specified. 

function Business() {
    return (
        <div className="business-parent">
        <div className="business-child">
        <img className="business-image" src={ business } alt="text" />
        <ConsumerDock></ConsumerDock>
        <div>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        <BusinessRemainingButtons></BusinessRemainingButtons>
        </div>
        </div>
        </div>


    );
  }
  
  export default Business;
import './business-with-dock-opened.css';
import React from 'react'
import business from '../../images/Business.png'; 
import TreeButton from '../../shared/tree-button/tree-button';
import MedicalInfoButton from '../../shared/medical-info-button/medical-info-button';
import BusinessWithDockOpened from '../../shared/business-dock/business-with-dock-opened/business-with-dock-opened';
import BusinessRemainingButtons from '../../shared/business/business-remaining-buttons';
//import ConsumerWithDockOpened from '../../shared/consumer-dock/consumer-with-dock-opened/consumer-with-dock-opened';

// So you would add an onclick event where the router would take you to the route specified. 

function Business() {
    return (
        <div className="business-with-dock-opened-parent">
        <img className="business-with-dock-opened-image" src={ business } alt="text" />
        <BusinessWithDockOpened></BusinessWithDockOpened>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        <BusinessRemainingButtons></BusinessRemainingButtons>
        </div>
    );
  }
  
  export default Business;
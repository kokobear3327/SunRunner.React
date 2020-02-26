import './consumer-with-dock-opened.css';
import React from 'react'
import consumer from '../../images/Consumer.png'; 
import TreeButton from '../../shared/tree-button/tree';
import MedicalInfoButton from '../../shared/medical-info-button/medical-info-button';
import ConsumerWithDockOpened from '../../shared/consumer-dock/consumer-with-dock-opened/consumer-with-dock-opened';

// So you would add an onclick event where the router would take you to the route specified. 

function Consumer() {
    return (
        <div>
        <img className="consumer" src={ consumer } alt="text" />
        <ConsumerWithDockOpened></ConsumerWithDockOpened>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        </div>
    );
  }
  
  export default Consumer;
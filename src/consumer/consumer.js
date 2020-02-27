import './consumer.css';
import React from 'react'
import consumer from '../images/Consumer.png'; 
import TreeButton from '../shared/tree-button/tree';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import ConsumerDock from '../shared/consumer-dock/consumer-dock';

function Consumer() {
    return (
        <div className="parent-container">
        <div className="child-container">
        <div>
        <img className="consumer" src={ consumer } alt="text" />
        <ConsumerDock></ConsumerDock>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        </div>
        </div>
        </div>
    );
  }
  
  export default Consumer;
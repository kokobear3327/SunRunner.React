import './consumer-with-dock-opened.css';
import React from 'react'
import consumer from '../../images/ConsumerCAD2.png'; 
import TreeButton from '../../shared/tree-button/tree';
import MedicalInfoButton from '../../shared/medical-info-button/medical-info-button';
import ConsumerWithDockOpened from '../../shared/consumer-dock/consumer-with-dock-opened/consumer-with-dock-opened';

function Consumer() {
    return (
        <div className="consumer-container">
        <img className="consumer-image" src={ consumer } alt="text" />
        <ConsumerWithDockOpened></ConsumerWithDockOpened>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        </div>
    );
  }
  
  export default Consumer;
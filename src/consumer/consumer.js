import './consumer.css';
import React from 'react'
import consumer from '../images/ConsumerCAD2.png'; 
import TreeButton from '../shared/tree-button/tree-button';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import ConsumerDock from '../shared/consumer-dock/consumer-dock';
import DoctorsButton from '../shared/doctors-button/doctors-button';
import LawyersButton from '../shared/lawyers-button/lawyers-button';
import LegalInfoButton from '../shared/legal-info-button/legal-info-button'


function Consumer() {
    return (
        <div className="consumer-parent">
        <div className="consumer-child">
        <img className="consumer-image" src={ consumer } alt="text" />
        <ConsumerDock></ConsumerDock>
        <div>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        <DoctorsButton></DoctorsButton>
        <LawyersButton></LawyersButton>
        <LegalInfoButton></LegalInfoButton>
        </div>
        </div>
        </div>
    );
  }
  
  export default Consumer;
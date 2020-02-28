import './consumer-with-dock-opened.css';
import React from 'react'
import consumer from '../../images/ConsumerCAD2.png'; 
import TreeButton from '../../shared/tree-button/tree-button';
import MedicalInfoButton from '../../shared/medical-info-button/medical-info-button';
import ConsumerWithDockOpened from '../../shared/consumer-dock/consumer-with-dock-opened/consumer-with-dock-opened';
import DoctorsButton from '../../shared/doctors-button/doctors-button';
import LawyersButton from '../../shared/lawyers-button/lawyers-button';
import LegalInfoButton from '../../shared/legal-info-button/legal-info-button';
import ReviewsButton from '../../shared/reviews-button/reviews-button';
import NewsButton from '../../shared/news-button/news-button';
import InvestmentsButton from '../../shared/investments-button/investments-button';

function Consumer() {
    return (
        <div className="consumer-container">
        <img className="consumer-image" src={ consumer } alt="text" />
        <ConsumerWithDockOpened></ConsumerWithDockOpened>
        <TreeButton></TreeButton>
        <MedicalInfoButton></MedicalInfoButton>
        <DoctorsButton></DoctorsButton>
        <LawyersButton></LawyersButton>
        <LegalInfoButton></LegalInfoButton>
        <ReviewsButton></ReviewsButton>
        <NewsButton></NewsButton>
        <InvestmentsButton></InvestmentsButton>
        </div>
    );
  }
  
  export default Consumer;
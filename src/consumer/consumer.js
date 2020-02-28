import './consumer.css';
import React from 'react'
import consumer from '../images/ConsumerCAD2.png'; 
import TreeButton from '../shared/tree-button/tree-button';
import ConsumerDock from '../shared/consumer-dock/consumer-dock';
import DoctorsButton from '../shared/doctors-button/doctors-button';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import LawyersButton from '../shared/lawyers-button/lawyers-button';
import LegalInfoButton from '../shared/legal-info-button/legal-info-button'
import ReviewsButton from '../shared/reviews-button/reviews-button';
import NewsButton from '../shared/news-button/news-button';
import InvestmentsButton from '../shared/investments-button/investments-button';
import DashboardButton from '../shared/dashboard-button/dashboard-button';

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
        <ReviewsButton></ReviewsButton>
        <NewsButton></NewsButton>
        <InvestmentsButton></InvestmentsButton>
        <DashboardButton></DashboardButton>
        </div>
        </div>
        </div>
    );
  }
  
  export default Consumer;
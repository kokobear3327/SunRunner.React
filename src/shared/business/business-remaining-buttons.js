import React from 'react';
import './business-remaining-buttons.css';
import CapexButton from './capex-button';
import LaborButton from './labor-button';
import OperationsButton from './operations-button';
import DashboardButton from './dashboard-button';
import BusinessGoodsButton from './goods-button';
import BusinessServicesButton from './services-button';
import BusinessTreeButton from './tree-of-knowledge-button';
import RemainingButtons from './remaining-buttons';

export default function BusinessRemainingButtons() {

    return (
        <div class="business-remaining-buttons-parent">
            <CapexButton></CapexButton>
            <LaborButton></LaborButton>
            <OperationsButton></OperationsButton>
            <DashboardButton></DashboardButton>
            <BusinessGoodsButton></BusinessGoodsButton>
            <BusinessServicesButton></BusinessServicesButton>
            <BusinessTreeButton></BusinessTreeButton>
            <RemainingButtons></RemainingButtons>
        </div>
    );
  }

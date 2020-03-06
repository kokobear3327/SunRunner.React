import './business-financials-buttons.css';
import IncomeButton from './income-button';
import BalanceButton from './balance-button';
import FlowsButton from './flows-button';
import React from 'react';

export default function BusinessFinancialsButtons() {

    return (
        <div className="business-financials-parent">
            <IncomeButton></IncomeButton>
            <BalanceButton></BalanceButton>
            <FlowsButton></FlowsButton>
        </div>
    );
  }
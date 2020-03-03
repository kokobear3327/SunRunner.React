import './consumer-financials-buttons.css';
import IncomeButton from './income-button';
import BalanceButton from './balance-button';
import FlowsButton from './flows-button';
import React from 'react';

export default function ConsumerFinancialsButtons() {

    return (
        <div className="consumer-financials-parent">
            <IncomeButton></IncomeButton>
            <BalanceButton></BalanceButton>
            <FlowsButton></FlowsButton>
        </div>
    );
  }
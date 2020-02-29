import React from 'react';
import './business-remaining-buttons.css';
import CapexButton from './capex-button';
import LaborButton from './labor-button';
import OperationsButton from './operations-button';

export default function BusinessRemainingButtons() {

    return (
        <div class="business-remaining-buttons-parent">
            <CapexButton></CapexButton>
            <LaborButton></LaborButton>
            <OperationsButton></OperationsButton>
        </div>
    );
  }

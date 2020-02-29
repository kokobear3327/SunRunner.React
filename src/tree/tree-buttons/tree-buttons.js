import React from 'react';
import './tree-buttons.css';
import AppliedSciencesButton from './applied-sciences-button';
import BusinessButton from './business-button';
import ComputerSciencesButton from './computer-sciences-button';


export default function TreeButtons() {

    return (
        <div class="tree-buttons">
        <AppliedSciencesButton></AppliedSciencesButton>
        <BusinessButton></BusinessButton>
        <ComputerSciencesButton></ComputerSciencesButton>
        </div>
    );
  }

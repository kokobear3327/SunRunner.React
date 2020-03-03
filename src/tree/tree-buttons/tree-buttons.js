import React from 'react';
import AppliedSciencesButton from './applied-sciences-button';
import BusinessButton from './business-button';
import ComputerSciencesButton from './computer-sciences-button';
import EconomicsButton from './economics-button';
import FormalSciencesButton from './formal-sciences-button';
import HistoryButton from './history-button';
import LifeSciencesButton from './life-sciences-button';
import MathButton from './math-button';
import MetadataButton from './metadata-button';
import PhysicalSciencesButton from './physical-sciences-button';
import ReferenceButton from './reference-button';
import SocialSciencesButton from './social-sciences-button';
import PhilosophyButton from './philosophy-button';


export default function TreeButtons() {

    return (
        <div class="tree-buttons">
        <AppliedSciencesButton></AppliedSciencesButton>
        <BusinessButton></BusinessButton>
        <ComputerSciencesButton></ComputerSciencesButton>
        <EconomicsButton></EconomicsButton>
        <FormalSciencesButton></FormalSciencesButton>
        <HistoryButton></HistoryButton>
        <LifeSciencesButton></LifeSciencesButton>
        <MathButton></MathButton>
        <MetadataButton></MetadataButton>
        <PhilosophyButton></PhilosophyButton>
        <PhysicalSciencesButton></PhysicalSciencesButton>
        <ReferenceButton></ReferenceButton>
        <SocialSciencesButton></SocialSciencesButton>
        </div>



    );
  }

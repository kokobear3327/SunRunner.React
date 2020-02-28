import React from 'react';
import './remaining-buttons.css';
import ApplicationsButton from './applications-button';
import ProjectsButton from './projects-button';
import TemplatesButton from './templates-button';
import DriveButton from './drive-button';
import NetworkOneButton from './network-one-button';
import NetworkTwoButton from './network-two-button';
import WallOneButton from './wall-one-button';
import WallTwoButton from './wall-two-button';
import SocialMediaButton from './social-media-button';
import AnalyticsButton from './analytics-button';


export default function RemainingButtons() {

    return (
        <div class="remaining-buttons-parent">
            <ApplicationsButton></ApplicationsButton>
            <ProjectsButton></ProjectsButton>
            <TemplatesButton></TemplatesButton>
            <DriveButton></DriveButton>
            <NetworkOneButton></NetworkOneButton>
            <NetworkTwoButton></NetworkTwoButton>
            <WallOneButton></WallOneButton>
            <WallTwoButton></WallTwoButton>
            <SocialMediaButton></SocialMediaButton>
            <AnalyticsButton></AnalyticsButton>
        </div>
    );
  }

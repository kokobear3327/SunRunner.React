import './consumer-with-dock-opened.css';
import React from 'react'
import consumer from '../../images/ConsumerBlank.png';  
// import ConsumerWithDockOpened from '../../shared/consumer-dock/consumer-with-dock-opened/consumer-with-dock-opened';
import BalloonWrenchActive from '../../shared/buttons/mac-bar/balloon-wrench-button/balloon-wrench-button';

// So you would add an onclick event where the router would take you to the route specified. 
function ConsumerWithBallonWrenchActive() {
    return (
        <div>
        <img className="consumer" src={ consumer } alt="text" />
        <BalloonWrenchActive></BalloonWrenchActive>
        </div>
    );
  }
  
  export default ConsumerWithBallonWrenchActive;


  //        <BalloonWrenchActive></BalloonWrenchActive>
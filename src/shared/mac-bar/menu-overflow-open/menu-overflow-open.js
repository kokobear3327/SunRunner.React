import './menu-overflow-open.css';
import React from 'react'
import Consumer from './Consumer.png'; 
import ConsumerDock from '../../consumer-dock/consumer-dock';
import TreeButton from '../../tree-button/tree';
import MedicalInfoButton from '../../medical-info-button/medical-info-button';
import { Link } from "react-router-dom";
import BalloonWrenchPic from '../../buttons/mac-bar/balloon-wrench-button/balloon-wrench.svg';
import TwirlPic from '../../buttons/mac-bar/twirl-button/twirl.svg';
import PreviousTemplatePic from '../../buttons/mac-bar/previous-template-button/previous.svg';
import NextTemplatePic from '../../buttons/mac-bar/next-template-button/next.svg';
import NavPic from '../../buttons/mac-bar/nav-button/nav.svg';
import HistoryPic from '../../buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from './menu-open.svg';
import BackButtonPic from '../../consumer-dock/consumer-with-dock-opened/images/back.svg';
import ForwardButtonPic from '../../consumer-dock/consumer-with-dock-opened/images/forward.svg';
import SnakePic from '../../business-dock/business-with-dock-opened/images/snake.svg';

function MenuOverflowOpen() {
    return (



  <Link to="/Consumer">
  <div className="consumer-dock-panel">
  <img className="back-button-svg" src={ BackButtonPic } alt="some" />
  <img className="forward-button-svg" src={ ForwardButtonPic } alt="some" />
      <img className="balloon-wrench-svg" src={ BalloonWrenchPic } alt="some" />
      <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
      <Link to="/BusinessWithDockOpened"><img className="twirl-svg" src={ TwirlPic } alt="some" /></Link>
      <img className="next-template-svg" src={ NextTemplatePic } alt="some" />
      <img className="nav-svg" src={ NavPic } alt="some" />
      <img className="history-svg" src={ HistoryPic } alt="some" />
      <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" /></Link>
      <img className="snake-svg" src={ SnakePic } alt="some" />
  </div>
  </Link>

  );
}
  
  export default MenuOverflowOpen;




//   <div>
//   <img className="consumer" src={ Consumer } alt="text" />
//   <ConsumerDock></ConsumerDock>
//   <TreeButton></TreeButton>
//   <MedicalInfoButton></MedicalInfoButton>
//   </div>

//         <Link to="/Consumer">
//         <div onClick={handleClick} className="consumer-dock-panel">
//         <img className="back-button-svg" src={ BackButtonPic } alt="some" />
//         <img className="forward-button-svg" src={ ForwardButtonPic } alt="some" />
//             <img className="balloon-wrench-svg" src={ BalloonWrenchPic } alt="some" />
//             <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
//             <Link to="/BusinessWithDockOpened"><img className="twirl-svg" src={ TwirlPic } alt="some" /></Link>
//             <img className="next-template-svg" src={ NextTemplatePic } alt="some" />
//             <img className="nav-svg" src={ NavPic } alt="some" />
//             <img className="history-svg" src={ HistoryPic } alt="some" />
//             <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" /></Link>
//             <img className="snake-svg" src={ SnakePic } alt="some" />
//         </div>
//         </Link>
import './consumer-with-dock-opened.css';
import React from 'react'
import { Link } from "react-router-dom";
import BalloonWrenchPic from '../../buttons/mac-bar/balloon-wrench-button/balloon-wrench.svg';
import TwirlPic from '../../buttons/mac-bar/twirl-button/twirl.svg';
import PreviousTemplatePic from '../../buttons/mac-bar/previous-template-button/previous.svg';
import NextTemplatePic from '../../buttons/mac-bar/next-template-button/next.svg';
import NavPic from '../../buttons/mac-bar/nav-button/nav.svg';
import HistoryPic from '../../buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from '../../buttons/mac-bar/menu-overflow/menu.svg';

function ConsumerWithDockOpened() {
    function handleClick() {
    console.log('handleClick for consumer dock Called');
        // Routing logic to take you to the treeView
    }

    return (

        <Link to="/Consumer">
        <div onClick={handleClick} className="consumer-dock-panel">
            <img className="balloon-wrench-svg" src={ BalloonWrenchPic } alt="some" />
            <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
            <img className="twirl-svg" src={ TwirlPic } alt="some" />
            <img className="next-template-svg" src={ NextTemplatePic } alt="some" />
            <img className="nav-svg" src={ NavPic } alt="some" />
            <img className="history-svg" src={ HistoryPic } alt="some" />
            <img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" />
        </div>
        </Link>


    );
  }
  
  export default ConsumerWithDockOpened;

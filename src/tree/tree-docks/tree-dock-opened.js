import './tree-dock-opened.css';
import React from 'react'
import { Link } from "react-router-dom";
import BalloonWrenchPic from '../../shared/buttons/mac-bar/balloon-wrench-button/balloon-wrench.svg';
import TwirlPic from '../../shared/buttons/mac-bar/twirl-button/twirl.svg';
import PreviousTemplatePic from '../../shared/buttons/mac-bar/previous-template-button/previous.svg';
import NextTemplatePic from '../../shared/buttons/mac-bar/next-template-button/next.svg';
import NavPic from '../../shared/buttons/mac-bar/nav-button/nav.svg';
import HistoryPic from '../../shared/buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from '../../shared/buttons/mac-bar/menu-overflow/illuminati.svg';
import BackButtonPic from '../images/back.svg';
import ForwardButtonPic from '../images/forward.svg';
import SnakePic from '../images/snake.svg';
import SearchBar from '../images/SearchBar.png';

function TreeDockOpened() {

    return (
        
        <div class="consumer-dock-panel-parent">
        <Link to="/Tree">

        <div className="consumer-panel2">
        <div className="search-bar-parent">
        <img className="search-bar-png3" src={SearchBar} alt="-" />
        </div>
        <img className="back-button-svg" src={ BackButtonPic } alt="some" />
        <img className="balloon-wrench-svg" src={ BalloonWrenchPic } alt="some" />
        <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
        <Link to="/BusinessWithDockOpened"><img className="twirl-svg" src={ TwirlPic } alt="some" /></Link>
        <Link to="/TreeViewVanillaOpened"><img className="next-template-svg" src={ NextTemplatePic } alt="some" /></Link>
        <img className="nav-svg" src={ NavPic } alt="some" />
        <img className="history-svg" src={ HistoryPic } alt="some" />
        <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" /></Link>
        <img className="snake-svg" src={ SnakePic } alt="some" />
        </div>
        </Link>
        </div>
    );
  }
  
  export default TreeDockOpened;


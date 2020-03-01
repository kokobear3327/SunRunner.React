import './tree-vanilla-dock-opened.css';
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
// import ForwardButtonPic from '../images/forward.svg';
import SnakePic from '../images/snake.svg';
import SearchBar from '../images/SearchBar.png';

// So from here you want to make the next go to desktop view (non-vanilla).  Then make previous link

export default function TreeVanillaDockOpened() {

    return (
        
        <div class="consumer-dock-panel-parent2">
        <Link to="/TreeViewVanilla">

        <div className="consumer-panel3">
        <div className="search-bar-parent2">
        <img className="search-bar-png4" src={SearchBar} alt="-" />
        </div>
        <img className="back-button-svg2" src={ BackButtonPic } alt="some" />
        <img className="balloon-wrench-svg2" src={ BalloonWrenchPic } alt="some" />
        <Link to="/TreeViewWithDockOpened"><img className="previous-template-svg2" src={ PreviousTemplatePic } alt="some" /></Link>
        <Link to="/BusinessWithDockOpened"><img className="twirl-svg2" src={ TwirlPic } alt="some" /></Link>
        <img className="next-template-svg2" src={ NextTemplatePic } alt="some" />
        <img className="nav-svg2" src={ NavPic } alt="some" />
        <img className="history-svg2" src={ HistoryPic } alt="some" />
        <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg2" src={ MenuOverflowPic } alt="some" /></Link>
        <img className="snake-svg2" src={ SnakePic } alt="some" />
        </div>
        </Link>
        </div>
    );
  }
  



import './tree-with-dock-opened.css';
import React from 'react'
import { Link } from "react-router-dom";
import NextTemplatePic from '../shared/buttons/mac-bar/next-template-button/next.svg';
import HistoryPic from '../shared/buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from '../shared/buttons/mac-bar/menu-overflow/illuminati.svg';
import BackButtonPic from './images/back.svg';
import ForwardButtonPic from './images/forward.svg';
import SnakePic from './images/snake.svg';
import SearchBar from './images/SearchBar.png';

// Link should link to tree-view without the bar on...

function TreeWithDockOpened() {

    return (
        
        <div class="consumer-dock-panel-parent2">

        <div className="consumer-panel3">
        <div className="search-bar-parent2">
        <img className="search-bar-png4" src={SearchBar} alt="-" />
        </div>
        <img className="back-button-svg2" src={ BackButtonPic } alt="some" />
        <img className="forward-button-svg2" src={ ForwardButtonPic } alt="some" />
            <img className="next-template-svg2" src={ NextTemplatePic } alt="some" />
            <img className="history-svg2" src={ HistoryPic } alt="some" />
            <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg2" src={ MenuOverflowPic } alt="some" /></Link>
            <img className="snake-svg2" src={ SnakePic } alt="some" />
        </div>
        </div>
    );
  }
  
  export default TreeWithDockOpened;
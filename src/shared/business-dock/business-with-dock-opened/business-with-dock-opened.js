import './business-with-dock-opened.css';
import React from 'react'
import { Link } from "react-router-dom";
import BalloonWrenchPic from '../../buttons/mac-bar/balloon-wrench-button/balloon-wrench.svg';
import TwirlPic from './images/tornado-filled.svg';
import PreviousTemplatePic from '../../buttons/mac-bar/previous-template-button/previous.svg';
import NextTemplatePic from '../../buttons/mac-bar/next-template-button/next.svg';
import NavPic from '../../buttons/mac-bar/nav-button/nav.svg';
import HistoryPic from '../../buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from '../../buttons/mac-bar/menu-overflow/illuminati.svg';
import BackButtonPic from './images/back.svg';
import ForwardButtonPic from './images/forward.svg';
import SnakePic from './images/snake.svg';
import SearchBar from './images/SearchBar.png';
import IrisPic from '../../../images/iris.svg'
import SoundPic from '../../../images/sound.svg'
import MacBar from '../../mac-bar/mac-bar';

function BusinessWithDockOpened() {

    return (
        <div className="business-panel-parent">
        <MacBar business={true}></MacBar>
        </div>


    );
  }
  
  export default BusinessWithDockOpened;

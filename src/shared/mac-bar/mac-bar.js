import React from 'react';
import './mac-bar.css';
import { Link } from "react-router-dom";
import BalloonWrenchPic from '../buttons/mac-bar/balloon-wrench-button/balloon-wrench.svg';
import TwirlPic from '../buttons/mac-bar/twirl-button/twirl.svg';
import TwirlPicFilled from '../../images/twirl-filled.svg'
import PreviousTemplatePic from '../buttons/mac-bar/previous-template-button/previous.svg';
import NextTemplatePic from '../buttons/mac-bar/next-template-button/next.svg';
import NavPic from '../buttons/mac-bar/nav-button/nav.svg';
import HistoryPic from '../buttons/mac-bar/history-button/history.svg';
import MenuOverflowPic from '../buttons/mac-bar/menu-overflow/illuminati.svg';
import BackButtonPic from '../../tree/images/back.svg';
import ForwardButtonPic from '../../tree/images/forward.svg';
import SnakePic from '../../tree/images/snake.svg';
import SearchBar from '../../images/SearchBar.png';
import IrisPic from '../../images/iris.svg'
import SoundPic from '../../images/sound.svg'
// import SoundPicOn from '../../images/sound-on.svg'

export default function MacBar(props) {
    let { business } = props;
    const ConsumerWithDockOpened = "/ConsumerWithDockOpened";
    const BusinessWithDockOpened = "/BusinessWithDockOpened";

    return (

        <div className="consumer-panel2">
        <div className="search-bar-parent">
        <img className="search-bar-png3" src={SearchBar} alt="-" />
        </div>
        <img className="back-button-svg" src={ BackButtonPic } alt="some" />
        <img className="forward-button-svg" src={ ForwardButtonPic } alt="some" />
            <img className="iris-svg" src={ IrisPic } alt="some" />
            <img className="balloon-wrench-svg" src={ BalloonWrenchPic } alt="some" />
            <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
            <Link to={props.business ? ConsumerWithDockOpened : BusinessWithDockOpened}><img className="twirl-svg" src={ props.business ? TwirlPicFilled : TwirlPic} alt="some" /></Link>
            <img className="next-template-svg" src={ NextTemplatePic } alt="some" />
            <img className="nav-svg" src={ NavPic } alt="some" />
            <img className="history-svg" src={ HistoryPic } alt="some" />
            <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" /></Link>
            <img className="snake-svg" src={ SnakePic } alt="some" />
            <img className="sound-svg" src={ SoundPic } alt="some" />
     
        </div>
    
     


    );
  }
  

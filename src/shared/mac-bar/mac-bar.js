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
import SoundPicOn from '../../images/sound-on.svg'

export default class MacBar extends React.Component {
    state = {
        soundBoolean: false,
    }
    constructor(props) {
        super(props);

        this.business = props;
        this.ConsumerWithDockOpened = "/ConsumerWithDockOpened";
        this.BusinessWithDockOpened = "/BusinessWithDockOpened";
        this.Consumer = "/Consumer";
        this.Business = "/Business";

        console.log(this.state);
    }

    SoundOn = () => {
        this.setState({
            soundBoolean: !this.state.soundBoolean 
    })
}

render() {
    return (

        <div className="consumer-panel2">
        <div className="search-bar-parent">
        <img className="search-bar-png3" src={SearchBar} alt="-" />
        </div>
        <img className="back-button-svg" src={ BackButtonPic } alt="some" />
        <img className="forward-button-svg" src={ ForwardButtonPic } alt="some" />
        <img className="iris-svg" src={ IrisPic } alt="some" />
        <Link to={ this.props.business ? this.Business : this.Consumer}><img className="left-blank" src={ BalloonWrenchPic } alt="some" /></Link>
            <img className="balloon-wrench-svg" src={ BalloonWrenchPic } alt="some" />
            <img className="previous-template-svg" src={ PreviousTemplatePic } alt="some" />
            <Link to={this.props.business ? this.ConsumerWithDockOpened : this.BusinessWithDockOpened}><img className="twirl-svg" src={ this.props.business ? TwirlPicFilled : TwirlPic} alt="some" /></Link>
            <img className="next-template-svg" src={ NextTemplatePic } alt="some" />
            <img className="nav-svg" src={ NavPic } alt="some" />
            <img className="history-svg" src={ HistoryPic } alt="some" />
            <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src={ MenuOverflowPic } alt="some" /></Link>
            <img className="snake-svg" src={ SnakePic } alt="some" />
            <img onClick={ this.SoundOn } className="sound-svg" src={ this.state.soundBoolean ? SoundPic : SoundPicOn } alt="some" />
            <Link to={ this.props.business ? this.Business : this.Consumer}><img className="right-blank" src={ BalloonWrenchPic } alt="some" /></Link>
        
            </div>
    
     


    );
  }
}


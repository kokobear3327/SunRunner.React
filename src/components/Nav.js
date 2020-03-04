import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import React from 'react';
import TreeButton from '../shared/tree-button/tree-button';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import DoctorsButton from '../shared/doctors-button/doctors-button';
import LawyersButton from '../shared/lawyers-button/lawyers-button';

let consumer = "/Consumer.png"
let business = "/Business.png"

export default class Nav extends React.Component {
    state = {
        soundBoolean: false,
        balloonBoolean: false,
        panelOpen: false,
        businessBoolean: false,
        menuBoolean: false
    }
    constructor(props) {
        super(props);
    }

    businessClickedParent(value) {

    }
    twirlFunction = () => {
        this.setState({businessBoolean: !this.state.businessBoolean})
        console.log("parent businessBoolean State changed")
    }

    soundFunction = () => {
        this.setState({soundBoolean: !this.state.soundBoolean})
    }

    menuFunction = () => {
        this.setState({menuBoolean: !this.state.menuBoolean})
        console.log("menu parent menuBoolean State changed")
        if (this.state.menuBoolean) { 
            console.log("This menu" + this.state.menuBoolean)
            let child = document.querySelector(".image")
            child.style.display = "none";
        }
    }

    render() { 
        return (
    <div className="parent">
    <div className="child">
            <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
        <source src="/Tree.mp4" type="video/mp4"></source>
        </video>
    <div className="menu-buttons">
    <TreeButton></TreeButton>

    </div>
    </div>

    <style jsx>{` 
    .parent {
        height:2048px;
        width: 1536px;
        padding-left: 60px;
    }
    
    .child {
    }

    .menu-buttons {
        display: hidden;
    }

    .nav-video {
        height: 1536;
        width: 2048;
    }

    .image {
        width: 1536px;
        height: 2048px;
    }
  `}</style>
  </div>
        )
    }
}





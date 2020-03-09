import Layout from '../components/Layout';
import Dock from '../components/Dock';
import React, { useEffect, useState } from 'react';
import Business from '../components/Business';
import Consumer from '../components/Consumer';
import Consumer2 from '../components/Consumer2';
import Menu from '../components/Menu';
import Nav from '../components/Nav';
import Iris from '../components/Iris';
import BalloonWrench from '../components/BalloonWrench';
import { useSelector } from 'react-redux';

// useEffect(() => {
//     console.log("useEffect:isNewsBoolean2:" + isNewsBoolean2)
//     isNewsBoolean = isNewsBoolean2
//       })

export default function Index() {
    const balloonWrench = "/balloon-wrench.svg";
    const balloonWrenchFilled = "/balloon-wrench-filled.svg"
    let isNewsBoolean = useSelector(state => state.isNews)
    let isDashboardBoolean = useSelector(state => state.isDashboard)
    const isFilled = isNewsBoolean || isDashboardBoolean

    let theState = {
        soundBoolean: false,
        balloonBoolean: true,
        panelOpen: false,
        businessBoolean: true,
        menuBoolean: true,
        navBoolean: true,
        irisBoolean: true
    }
    const [state, setState] = useState(theState);

    let isNextTemplate = useSelector(state => state.isNextTemplate)
    useEffect(() => {
        if (isNextTemplate) {
            let consumer = document.querySelector(".consumer")
            consumer.style.display = "none";
            let consumer2 = document.querySelector(".consumer2")
            consumer2.style.display = "flex";

        }
    
    })


    const twirlFunction = () => {
        setState({businessBoolean: !state.businessBoolean})
        if (state.businessBoolean) {
            let business = document.querySelector(".business")
            business.style.display = "flex"
            let consumer = document.querySelector(".consumer")
            consumer.style.display = "none"
        } else if (!state.businessBoolean) {
            let consumer = document.querySelector(".consumer")
            consumer.style.display = "flex"
            let business = document.querySelector(".business")
            business.style.display = "none"
        }
    }

    const soundFunction = () => {
         setState({soundBoolean: !state.soundBoolean})
    }

    const menuFunction = () => {
         setState({menuBoolean: !state.menuBoolean})
        if ( state.menuBoolean) { 
            let menu = document.querySelector(".menu")
            menu.style.display = "flex"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "none"
        } else if (!state.menuBoolean) {
            let menu = document.querySelector(".menu")
            menu.style.display = "none"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "flex"
        }
    }

    const navFunction = () => {
         setState({navBoolean: !state.navBoolean})
        if ( state.navBoolean) { 
            let nav = document.querySelector(".nav")
            nav.style.display = "flex"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "none"
        } else if (!state.navBoolean) {
            let nav = document.querySelector(".nav")
            nav.style.display = "none"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "flex"
        }
    }

    const balloonFunction = () => {
         setState({balloonBoolean: !state.balloonBoolean})
        if ( state.balloonBoolean) { 
            let balloon = document.querySelector(".balloon-cursor")
            balloon.style.display = "flex"
            let balloonImage = document.querySelector(".balloon-image ")
            balloonImage.style.display = "flex"
            let indexParent = document.querySelector(".index-parent")
            indexParent.style.cursor = "none"
        } else if (!state.balloonBoolean) {
            let balloon = document.querySelector(".balloon-cursor")
            balloon.style.display = "none"
            let balloonImage = document.querySelector(".balloon-image ")
            balloonImage.style.display = "none"
            let indexParent = document.querySelector(".index-parent")
            indexParent.style.cursor = "default"
        }
    }

    const irisFunction = () => {
         setState({irisBoolean: !state.irisBoolean})
        if ( state.irisBoolean) {
            let iris = document.querySelector(".iris")
            iris.style.display = "flex"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "none"
        } else if (!state.irisBoolean) {
            let iris = document.querySelector(".iris")
            iris.style.display = "none"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "flex"
        }
    }


        return (
    <Layout>
    <div className="index-parent">
    <div className="index-child">
    <Dock iris={irisFunction} balloon={balloonFunction} nav={navFunction} twirl={twirlFunction} sound={ soundFunction } menu={menuFunction}></Dock>
    <div className="balloon-cursor"><img className="balloon-image" src={isFilled ? balloonWrenchFilled : balloonWrench} alt="-"/></div>
    
    
    <div className="main-container">
    <div className="business">
    <Business></Business>
    </div>

    <div className="consumer-container">
    
    <div className="consumer">
    <Consumer></Consumer>
    </div>
    
    <div className="consumer2">
    <Consumer2></Consumer2>
    </div>
    
    
    </div>
    </div>
    <div className="menu-container">
    <div className="menu">
    <Menu></Menu>
    </div>
    </div>
    
    <div className="nav">
    <Nav></Nav>
    </div>

    <div className="balloon">
    <BalloonWrench></BalloonWrench>
    </div>

    <div className="iris">
    <Iris></Iris>
    </div>

    </div>
    </div>

    <style jsx>{` 

    .index-parent {
        align-items: center;
        justify-content: center;
        width: 1623px;
        height: 2149px;
        background-image: url('./iPadRim.png');
        margin-top: 30px;
          }
    
    
    .index-child {
        justify-content: center;
        position: relative;
        top:5px;
    }

    .balloon-cursor {
        position: absolute;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        display: none;
        z-index: 100;
        pointer-events: none;
    }

    .balloon-cursor img {
        display: none;
        width: 33px;
        height: 33px;
        cursor: none;
        pointer-events: none;
    }

    .balloon-cursor-filled {
        width: 42px;
        height: 42px;
        cursor: none;
    }

    .main-container {
        display: flex;
        justify-content: center;
    }

    .consumer-container {
        display: flex;
        margin-left: 312px;
    }

    .consumer2 {
        display: none;
    }

    .business {
        display: none;
    }

    .nav{
        display: none;
        margin-left: 30px;
    }

    .menu { 
        display: none;
        margin-left: 30px;
    }

    .balloon { 
        display: none;
        margin-left: 30px;
    }

    .iris { 
        display: none;
        margin-left: 30px;
    }



  `}</style>
    </Layout>
        )
    }



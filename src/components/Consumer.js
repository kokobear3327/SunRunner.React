import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Dock from '../components/Dock';
import React, { useEffect, useState } from 'react';
import TreeButton from '../shared/tree-button/tree-button';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import DoctorsButton from '../shared/doctors-button/doctors-button';
import LawyersButton from '../shared/lawyers-button/lawyers-button';
import LegalInfoButton from '../shared/legal-info-button/legal-info-button'
import ReviewsButton from '../shared/reviews-button/reviews-button';
import NewsButton from '../shared/news-button/news-button';
import InvestmentsButton from '../shared/investments-button/investments-button';
import DashboardButton from '../shared/dashboard-button/dashboard-button';
import ProductsButtons from '../shared/products-buttons/products-buttons';
import MessagingButtons from '../shared/messaging-buttons/messaging-buttons';
import ConsumerFinancialsButtons from '../shared/consumer-financials-buttons/consumer-financials-buttons';
import RemainingButtons from '../shared/remaining-buttons/remaining-buttons';
import { useSpring, animated, config } from 'react-spring';

// So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png"
let business = "/Business.png"

export default function Consumer() {


    let localState = {
        soundBoolean: false,
        balloonBoolean: false,
        panelOpen: false,
        businessBoolean: false,
        menuBoolean: false
    }

    let [state, setState] = useState(localState);

    const twirlFunction = () => {
        setState({businessBoolean: !state.businessBoolean})
        console.log("parent businessBoolean State changed")
    }

    const soundFunction = () => {
        setState({soundBoolean: !state.soundBoolean})
    }

    const menuFunction = () => {
        setState({menuBoolean: !state.menuBoolean})
        console.log("parent menuBoolean State changed")
        if (state.menuBoolean) { 
            console.log("This menu" + state.menuBoolean)
            let child = document.querySelector(".image")
            child.style.display = "none";
        }
    }

    const fade = useSpring({
        config: { duration: 4250, mass: 1, tension: 280, velocity: 200, friction: 120 },
        opacity: 1, from: {opacity: 0},
        display: 'block'
        })


        
        
        const [props2, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
        const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
        const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

        
        
        
        return (
    <div className="consumer-parent">
    <div className="consumer-child">
    <div className="consumer-image-container">
    <animated.img onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
    onMouseLeave={() => set({ xys: [0, 0, 1] })} style={{ transform: props2.xys.interpolate(trans) }} className="consumer-image" src={ consumer } alt="text"/>
    <div className="consumer-image-background"></div>
    </div>
    <div>
    <div className="consumer-button-container">
    <div className="tree-button-container">
    <TreeButton></TreeButton>
    </div>
    <MedicalInfoButton></MedicalInfoButton>
    <DoctorsButton></DoctorsButton>
    <LawyersButton></LawyersButton>
    <LegalInfoButton></LegalInfoButton>
    <ReviewsButton></ReviewsButton>
    <div className="news-button-container">
    <NewsButton></NewsButton>
    </div>
    <InvestmentsButton></InvestmentsButton>
    <DashboardButton></DashboardButton>
    <ProductsButtons></ProductsButtons>
    <MessagingButtons></MessagingButtons>
    <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
    <div className="remaining-buttons-container">
    <RemainingButtons></RemainingButtons>
    </div>
    
    

    </div>
    </div>
    </div>
    <style jsx>{` 
    .consumer-parent {
        height:2048px;
        width: 1536px;
        padding-top: 14px;
    }
    
    .consumer-child {
        display: flex;
    }



    .consumer-button-container {
        position:relative;
        top: 2738px;
        right: 769px;
    
    }

    .tree-button-container {}

    .news-button-container {
    }

    .news-button-container:hover {
    }


    .consumer-image-container {
        transform: translate(50%, 0%);
        height: 2000px!important;
        margin-bottom: 2000px;

    }


    .consumer-image {
        top: 689px;
        position: relative;
        z-index: 2;
        left: 768px!important;
        margin-top: 200px;
    }

    .consumer-image-background {
        width: 1536px;
        height: 2005px;
        background: linear-gradient(270deg, #000000, #02091b);
        background-size: 400% 400%;
        animation: AnimationName 10s ease-in-out infinite;
        z-index:-2;
        display: flex;
        transform: translate(0%, -50%);
        bottom: 270px;
    
        position: relative;


    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
        }
    }


  `}</style>
      </div>
        )
    }












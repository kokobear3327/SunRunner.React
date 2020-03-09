import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Dock from '../components/Dock';
import React from 'react';
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

// So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png"
let business = "/Business.png"

export default class Consumer extends React.Component {

    componentDidMount() {
        document.addEventListener("mouseover", function() {
            let newsButton = document.querySelector(".news-button-container")
        
        })
    }

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
        console.log("parent menuBoolean State changed")
        if (this.state.menuBoolean) { 
            console.log("This menu" + this.state.menuBoolean)
            let child = document.querySelector(".image")
            child.style.display = "none";
        }
    }

    render() { 
        return (
    <div className="consumer-parent">
    <div className="consumer-child">
    <div className="consumer-image-container">
    <img className="consumer-image" src={ consumer } alt="text" />
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
    }

    .consumer-image {
        top: 60px;
        position: relative;
        z-index: 1;
    }


    .consumer-button-container {
        position:relative;
        top:50px;
    }

    .tree-button-container {}

    .news-button-container {
    }

    .news-button-container:hover {
    }


    .consumer-image-container {

    }

    .consumer-image-background {
        width: 1536px;
        height: 2048px;
        position: absolute;
        background: linear-gradient(270deg, #000000, #02020a);
        background-size: 400% 400%;
        animation: AnimationName 2s ease-in-out infinite;
        bottom: 510px;
        z-index:0;
        left: 827px;
        bottom: 477px;
        top: 109px;

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
}

Consumer.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}
// #020313
// <LegalInfoButton></LegalInfoButton>
// <ReviewsButton></ReviewsButton>
// <NewsButton></NewsButton>
// <InvestmentsButton></InvestmentsButton>
// <DashboardButton></DashboardButton>
// <ProductsButtons></ProductsButtons>
// <MessagingButtons></MessagingButtons>
// <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
// <RemainingButtons></RemainingButtons>


// <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
// <source src="/Tree.mp4" 
//     type="video/mp4"></source>
//   </video>

// componentDidMount() {
//     const vid = document.querySelector(".fullscreen-video")
//     console.log(vid)
//     vid.play()
// }

// <TreeButton></TreeButton>
// <MedicalInfoButton></MedicalInfoButton>
// <DoctorsButton></DoctorsButton>
// <LawyersButton></LawyersButton>
// <LegalInfoButton></LegalInfoButton>
// <ReviewsButton></ReviewsButton>
// <NewsButton></NewsButton>
// <InvestmentsButton></InvestmentsButton>
// <DashboardButton></DashboardButton>
// <ProductsButtons></ProductsButtons>
// <MessagingButtons></MessagingButtons>
// <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
// <RemainingButtons></RemainingButtons>











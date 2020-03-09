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
let blank = "/blank.png"

export default class Consumer2 extends React.Component {

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
    <div className="consumer-parent2">
    <div className="consumer-child2">
    <div className="consumer-image-container2">
    <img className="consumer-image2" src={ blank } alt="text" />
    <div className="consumer-image-background2"></div>
    </div>
    <div>
    <div className="consumer-button-container2">

    <div className="tree-parent2">
    <div className="tree-icon2">
    </div>
    <div className="tree-button2">
    <TreeButton></TreeButton>
    </div>

    </div>
    <MedicalInfoButton></MedicalInfoButton>
    <DoctorsButton></DoctorsButton>
    <LawyersButton></LawyersButton>
    <LegalInfoButton></LegalInfoButton>
    <ReviewsButton></ReviewsButton>
    <div className="news-button-container2">
    <NewsButton></NewsButton>
    </div>
    <InvestmentsButton></InvestmentsButton>
    <DashboardButton></DashboardButton>
    <ProductsButtons></ProductsButtons>
    <MessagingButtons></MessagingButtons>
    <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
    <div className="remaining-buttons-container2">
    <RemainingButtons></RemainingButtons>
    </div>
    
    

    </div>
    </div>
    </div>
    <style jsx>{` 
    .consumer-parent2 {
        height:2048px;
        width: 1536px;
        display:flex;
        position: relative;
        right: 157px;
        bottom: 3px
                justify-content: center;
    }
    
    .consumer-child2 {
        display: flex;
        height:2048px;
        width: 1536px;
        position: relative;


    }



    .consumer-button-container2 {
        display: flex;
        position:relative;
        top: 2838px;
        right: 769px;
        z-index: 2;
        border: 4px orange solid;
    
    }

    .tree-parent2 {
        display: flex
        justify-content: center;
        width: 45px
        height:45px
        color: yellow;
        border: 7px pink solid;
    }

    .tree-icon2 {

    }

    .tree-button2 {
        position: relative;
    }







    .news-button-container2 {
    }

    .news-button-container2:hover {
    }


    .consumer-image-container2 {
        display: flex;
    }


    .consumer-image2 {
        position: relative;
        z-index: 1;
        height: 2000px;
        width: 1536px;
        left: 1px;
    }

    .consumer-image-background2 {
        width: 1536px;
        height: 1940px;
        background: linear-gradient(270deg, #000000, #02490a);
        background-size: 400% 400%;
        animation: AnimationName 10s ease-in-out infinite;
        z-index:0;
        display: flex;
        transform: translate(0%, -50%);
        top: 1020px;
        right: 1534px;
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
}










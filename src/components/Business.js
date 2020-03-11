import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Dock from '../components/Dock';
import React from 'react';
import TreeButton from '../shared/tree-button/tree-button';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import DoctorsButton from '../shared/doctors-button/doctors-button';
import LawyersButton from '../shared/lawyers-button/lawyers-button';
import BusinessRemainingButtons from '../shared/business/business-remaining-buttons';
// import LegalInfoButton from '../shared/legal-info-button/legal-info-button'
// import ReviewsButton from '../shared/reviews-button/reviews-button';
// import NewsButton from '../shared/news-button/news-button';
// import InvestmentsButton from '../shared/investments-button/investments-button';
// import DashboardButton from '../shared/dashboard-button/dashboard-button';
// import ProductsButtons from '../shared/products-buttons/products-buttons';
// import MessagingButtons from '../shared/messaging-buttons/messaging-buttons';
// import ConsumerFinancialsButtons from '../shared/consumer-financials-buttons/consumer-financials-buttons';
// import RemainingButtons from '../shared/remaining-buttons/remaining-buttons';


// .consumer-image-container {
//     transform: translate(50%, 0%);
//     height: 2000px!important;
//     margin-bottom: 2000px;

// }


// .consumer-image {
//     top: 699px;
//     position: relative;
//     z-index: 1;
// }

// .consumer-image-background {
//     width: 1536px;
//     height: 1868px;
//     background: linear-gradient(270deg, #000000, #02091b);
//     background-size: 400% 400%;
//     animation: AnimationName 10s ease-in-out infinite;
//     z-index:0;
//     display: flex;
//     transform: translate(0%, -50%);
//     bottom: 227px;
//     left: 1px;
//     position: relative;


// @keyframes AnimationName {
//     0%{background-position:0% 50%}
//     50%{background-position:100% 50%}
//     100%{background-position:0% 50%}
// }
// }

let consumer = "/Consumer.png"
let business = "/view-business.png"

export default class Business extends React.Component {
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
    <div className="business-parent">
    <div className="business-child">
    <div className="business-image-container">
    <img className="business-image" src={ business } alt="text" />
    <div className="business-image-background"></div>
    </div>
    <div className="business-button-container">
    <BusinessRemainingButtons></BusinessRemainingButtons>
    </div>
    </div>
    <style jsx>{` 
    .business-parent {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom:60px;
        overflow-y: none;
        position: relative;
        margin-left: 319px;
        bottom: 6px;

    }

    .business-image {
        width: 1536px;
        height: 2007px;
        position: relative;
        margin-left: 838px;
        bottom: 43px;
        z-index: 1;
    }

    .business-button-container {
        position: relative;
        bottom: 2039px;
    }

    .business-image-background {
        width: 1536px;
        height: 2001px;
        background: linear-gradient(270deg, #000000, #02091b);
        background-size: 400% 400%;
        animation: AnimationName 10s ease-in-out infinite;
        z-index:0;
        display: flex;
        transform: translate(0%, -50%);
        bottom: 1001px;
        left: 837px;
        position: relative;


    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
        }
    }

    .business-button-container {
        padding-top: 94px;
        padding-left: 4px;
    }
  `}</style>
  </div>
        )
    }
}

Business.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}



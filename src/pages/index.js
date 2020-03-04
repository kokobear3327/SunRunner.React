import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Dock from '../components/Dock';
import React from 'react';
import TreeButton from '../shared/tree-button/tree-button';
import MedicalInfoButton from '../shared/medical-info-button/medical-info-button';
import DoctorsButton from '../shared/doctors-button/doctors-button';
import LawyersButton from '../shared/lawyers-button/lawyers-button';
// import LegalInfoButton from '../shared/legal-info-button/legal-info-button'
// import ReviewsButton from '../shared/reviews-button/reviews-button';
// import NewsButton from '../shared/news-button/news-button';
// import InvestmentsButton from '../shared/investments-button/investments-button';
// import DashboardButton from '../shared/dashboard-button/dashboard-button';
// import ProductsButtons from '../shared/products-buttons/products-buttons';
// import MessagingButtons from '../shared/messaging-buttons/messaging-buttons';
// import ConsumerFinancialsButtons from '../shared/consumer-financials-buttons/consumer-financials-buttons';
// import RemainingButtons from '../shared/remaining-buttons/remaining-buttons';
import Business from '../components/Business';
import Consumer from '../components/Consumer';
import Menu from '../components/Menu';
import Nav from '../components/Nav';

// So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png"
let business = "/Business.png"

export default class Index extends React.Component {
    componentDidMount() {
        console.log("index.js componentDidMount() called")
    }

    componentDidUpdate() {
        console.log("index.js componentDidUpdate() called")
    }

    state = {
        soundBoolean: false,
        balloonBoolean: false,
        panelOpen: false,
        businessBoolean: true,
        menuBoolean: true,
        navBoolean: true
    }
    constructor(props) {
        super(props);

    }

    businessClickedParent(value) {

    }
    twirlFunction = () => {
        this.setState({businessBoolean: !this.state.businessBoolean})
        console.log("parent businessBoolean State changed:" + this.state.businessBoolean)
        if (this.state.businessBoolean) {
            console.log("True logged")
            let business = document.querySelector(".business")
            business.style.display = "inline"
        let consumer = document.querySelector(".consumer")
        consumer.style.display = "none"
        } else if (!this.state.businessBoolean) {
            console.log("false logged")
            let consumer = document.querySelector(".consumer")
            consumer.style.display = "inline"
            let business = document.querySelector(".business")
            business.style.display = "none"
        }
    }

    soundFunction = () => {
        this.setState({soundBoolean: !this.state.soundBoolean})
    }

    menuFunction = () => {
        this.setState({menuBoolean: !this.state.menuBoolean})
        if (this.state.menuBoolean) { 
            let menu = document.querySelector(".menu")
            menu.style.display = "flex"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "none"
        } else if (!this.state.menuBoolean) {
            let menu = document.querySelector(".menu")
            menu.style.display = "none"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "flex"
        }
    }

    navFunction = () => {
        this.setState({navBoolean: !this.state.navBoolean})
        if (this.state.navBoolean) { 
            let nav = document.querySelector(".nav")
            nav.style.display = "flex"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "none"
        } else if (!this.state.navBoolean) {
            let nav = document.querySelector(".nav")
            nav.style.display = "none"
            let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display = "flex"
        }
    }


    render() { 
        return (
    <Layout>
    <div className="parent">
    <div className="child">
    <Dock nav={this.navFunction} twirl={this.twirlFunction} sound={ this.soundFunction } menu={this.menuFunction} onClick={this.toggleDock}></Dock>
        
    <div className="main-container">
    <div className="business">
    <Business></Business>
    </div>

    <div className="consumer">
    <Consumer></Consumer>
    </div>
    </div>
    
    <div className="menu">
    <Menu></Menu>
    </div>

    <div className="nav">
    <Nav></Nav>
    </div>

    </div>
    </div>

    <style jsx>{` 

    .parent {
        align-items: center;
        justify-content: center;
        width: 1700px;
        height: 2200px;
          }
    
    
    .child {

    }

    .main-container {
        display: flex;
        justify-content: center;
        margin-left: 29px;
    }

    .nav{
        display: none;
        margin-left: 21px;
    }

    .menu { 
        display: none;
        margin-left: 82px;
    }

    .consumer {
        display: flex;
    }

    .business {
        display: none;
    }


  `}</style>
    </Layout>
        )
    }
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}


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
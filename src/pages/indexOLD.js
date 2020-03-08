// import Layout from '../components/Layout';
// import Dock from '../components/Dock';
// import React from 'react';
// import Business from '../components/Business';
// import Consumer from '../components/Consumer';
// import Menu from '../components/Menu';
// import Nav from '../components/Nav';
// import Iris from '../components/Iris';
// import BalloonWrench from '../components/BalloonWrench';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import allReducer from '../reducers';
// import { useSelector } from 'react-redux';

// const store = createStore(allReducer);
// const balloonWrench = "/balloon-wrench.svg";
// const balloonWrenchFilled = "/balloon-wrench-filled.svg"
// let isNews = false; 

// export default class Index extends React.Component {

    

//     state = {
//         soundBoolean: false,
//         balloonBoolean: true,
//         panelOpen: false,
//         businessBoolean: true,
//         menuBoolean: true,
//         navBoolean: true,
//         irisBoolean: true
//     }

//     twirlFunction = () => {
//         this.setState({businessBoolean: !this.state.businessBoolean})
//         if (this.state.businessBoolean) {
//             let business = document.querySelector(".business")
//             business.style.display = "flex"
//             let consumer = document.querySelector(".consumer")
//             consumer.style.display = "none"
//         } else if (!this.state.businessBoolean) {
//             let consumer = document.querySelector(".consumer")
//             consumer.style.display = "flex"
//             let business = document.querySelector(".business")
//             business.style.display = "none"
//         }
//     }

//     soundFunction = () => {
//         this.setState({soundBoolean: !this.state.soundBoolean})
//     }

//     menuFunction = () => {
//         this.setState({menuBoolean: !this.state.menuBoolean})
//         if (this.state.menuBoolean) { 
//             let menu = document.querySelector(".menu")
//             menu.style.display = "flex"
//             let mainContainer = document.querySelector(".main-container")
//             mainContainer.style.display = "none"
//         } else if (!this.state.menuBoolean) {
//             let menu = document.querySelector(".menu")
//             menu.style.display = "none"
//             let mainContainer = document.querySelector(".main-container")
//             mainContainer.style.display = "flex"
//         }
//     }

//     navFunction = () => {
//         this.setState({navBoolean: !this.state.navBoolean})
//         if (this.state.navBoolean) { 
//             let nav = document.querySelector(".nav")
//             nav.style.display = "flex"
//             let mainContainer = document.querySelector(".main-container")
//             mainContainer.style.display = "none"
//         } else if (!this.state.navBoolean) {
//             let nav = document.querySelector(".nav")
//             nav.style.display = "none"
//             let mainContainer = document.querySelector(".main-container")
//             mainContainer.style.display = "flex"
//         }
//     }

//     balloonFunction = () => {
//         this.setState({balloonBoolean: !this.state.balloonBoolean})
//         if (this.state.balloonBoolean) { 
//             let balloon = document.querySelector(".balloon-cursor")
//             balloon.style.display = "flex"
//             let balloonImage = document.querySelector(".balloon-image ")
//             balloonImage.style.display = "flex"
//             let indexParent = document.querySelector(".index-parent")
//             indexParent.style.cursor = "none"
//         } else if (!this.state.balloonBoolean) {
//             let balloon = document.querySelector(".balloon-cursor")
//             balloon.style.display = "none"
//             let balloonImage = document.querySelector(".balloon-image ")
//             balloonImage.style.display = "none"
//             let indexParent = document.querySelector(".index-parent")
//             indexParent.style.cursor = "default"
//         }
//     }

//     irisFunction = () => {
//         this.setState({irisBoolean: !this.state.irisBoolean})
//         if (this.state.irisBoolean) {
//             let iris = document.querySelector(".iris")
//             iris.style.display = "flex"
//             let mainContainer = document.querySelector(".main-container")
//             mainContainer.style.display = "none"
//         } else if (!this.state.irisBoolean) {
//             let iris = document.querySelector(".iris")
//             iris.style.display = "none"
//             let mainContainer = document.querySelector(".main-container")
//             mainContainer.style.display = "flex"
//         }
//     }


//     render() { 
//         return (
//             <Provider store={store}>
//     <Layout>
//     <div className="index-parent">
//     <div className="index-child">
//     <Dock iris={this.irisFunction} balloon={this.balloonFunction} nav={this.navFunction} twirl={this.twirlFunction} sound={ this.soundFunction } menu={this.menuFunction} onClick={this.toggleDock}></Dock>
//     <div className="balloon-cursor"><img className="balloon-image" src={isNews ? balloonWrench : balloonWrenchFilled} alt="-"/></div>
//     <div className="main-container">
//     <div className="business">
//     <Business></Business>
//     </div>

//     <div className="consumer">
//     <Consumer></Consumer>
//     </div>
//     </div>
//     <div className="menu-container">
//     <div className="menu">
//     <Menu></Menu>
//     </div>
//     </div>
    
//     <div className="nav">
//     <Nav></Nav>
//     </div>

//     <div className="balloon">
//     <BalloonWrench></BalloonWrench>
//     </div>

//     <div className="iris">
//     <Iris></Iris>
//     </div>

//     </div>
//     </div>

//     <style jsx>{` 

//     .index-parent {
//         align-items: center;
//         justify-content: center;
//         width: 1623px;
//         height: 2149px;
//         background-image: url('./iPadRim.png');
//         margin-top: 30px;
//           }
    
    
//     .index-child {
//         justify-content: center;
//     }

//     .balloon-cursor {
//         position: absolute;
//         border-radius: 50%;
//         transform: translate(-50%, -50%);
//         display: none;
//         z-index: 100;
//         pointer-events: none;
//     }

//     .balloon-cursor img {
//         display: none;
//         width: 33px;
//         height: 33px;
//         cursor: none;
//         pointer-events: none;
//     }

//     .main-container {
//         display: flex;
//         justify-content: center;
//     }

//     .consumer {
//         display: flex;
//         margin-left: 312px;
//     }

//     .business {
//         display: none;
//     }

//     .nav{
//         display: none;
//         margin-left: 30px;
//     }

//     .menu { 
//         display: none;
//         margin-left: 30px;
//     }

//     .balloon { 
//         display: none;
//         margin-left: 30px;
//     }

//     .iris { 
//         display: none;
//         margin-left: 30px;
//     }



//   `}</style>
//     </Layout>
//     </Provider>
//         )
//     }
// }

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//   const data = await res.json();

//   return {
//     bpi: data.bpi
//   };
// }


// // <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
// // <source src="/Tree.mp4" 
// //     type="video/mp4"></source>
// //   </video>

// // componentDidMount() {
// //     const vid = document.querySelector(".fullscreen-video")
// //     console.log(vid)
// //     vid.play()
// // }

import React from 'react';

let balloon = "/balloon-wrench-view.png"

export default class BalloonWrench extends React.Component {
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
    <div className="balloon-parent">
    <div className="balloon-child">
    <img className="balloon-image" src={ balloon } alt="text" />
    </div>
    <style jsx>{` 
    .balloon-parent {
        height:2048px;
        width: 1536px;
    }

    .balloon-child {
        margin-left: 13px;
    }

    .balloon-image {
        width: 1536px;
        height: 2048px;
    }


    .consumer-button-container {
    
    }

    .tree-button-container {}


  `}</style>
      </div>
        )
    }
}

BalloonWrench.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

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











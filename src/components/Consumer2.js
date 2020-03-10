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
import GoodsButton from '../shared/products-buttons/goods-button';
import ServicesButton from '../shared/products-buttons/services-button';

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

    

    <div className="tree-parent2">
    <div className="tree-icon2"></div>
    <div className="tree-button2">
    <TreeButton></TreeButton>
    </div>
    </div>

    <div className="medical-info-parent2">
    <div className="medical-info-icon2"></div>
    <div className="medical-info-button2">
    <MedicalInfoButton></MedicalInfoButton>
    </div>
    </div>

    <div className="doctors-info-parent2">
    <div className="doctors-info-icon2"></div>
    <div className="doctors-info-button2">
    <DoctorsButton></DoctorsButton>
    </div>
    </div>

    <div className="lawyers-info-parent2">
    <div className="lawyers-info-icon2"></div>
    <div className="lawyers-info-button2">
    <LawyersButton></LawyersButton>
    </div>
    </div>

    <div className="legal-info-parent2">
    <div className="legal-info-icon2"></div>
    <div className="legal-info-button2">
    <LegalInfoButton></LegalInfoButton>
    </div>
    </div>

    <div className="reviews-parent2">
    <div className="reviews-icon2"></div>
    <div className="reviews-button2">
    <ReviewsButton></ReviewsButton>
    </div>
    </div>


    <div className="news-parent2">
    <div className="news-icon2"></div>
    <div className="news-button2">
    <NewsButton></NewsButton>
    </div>
    </div>

    <div className="dashboard-parent2">
    <div className="dashboard-icon2"></div>
    <div className="dashboard-button2">
    <DashboardButton></DashboardButton>
    </div>
    </div>


    <div className="goods-parent2">
    <div className="goods-icon2"></div>
    <div className="goods-button2">
    <GoodsButton></GoodsButton>
    </div>
    </div>


    <div className="services-parent2">
    <div className="services-icon2"></div>
    <div className="services-button2">
    <ServicesButton></ServicesButton>
    </div>
    </div>


    <ProductsButtons></ProductsButtons>

    <InvestmentsButton></InvestmentsButton>

    <MessagingButtons></MessagingButtons>
    <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
    <div className="remaining-buttons-container2">
    <RemainingButtons></RemainingButtons>
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









    .tree-parent2 {
        position: relative;
        right: 2971px;
        width: 130px;
        height:130px;
        color: yellow;
        top: 260px;
        border: 7px green solid;
        display: flex;
        z-index:32;
    }

    .tree-icon2 {
        width: 130px;
        height:130px;
        color: yellow;
        background-color: yellow;
    }

    .tree-button2 {
        position: relative;
        top: 338px;
        left: 73px;
    }




    .medical-info-parent2 {
        position: relative;
        right: 2636px;
        width: 130px;
        height: 130px;
        color: yellow;
        top: 131px;
        border: 7px green solid;
        display: flex;
        z-index:32;
    }

    .medical-info-icon2 {
        width: 130px!important;
        height:130px;
        color: yellow;
        background-color: yellow;
    }

    .medical-info-button2 {
        position: relative;
        top: 528px;
        left: 414px;
    }



    .doctors-info-parent2 {
        position: relative;
        right: 2334px;
        width: 130px;
        height: 130px;
        color: yellow;
        border: 7px green solid;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        z-index: 32;
        bottom: 0px;
    }

    .doctors-info-icon2 {
        width: 130px!important;
        height:130px;
        color: yellow;
        background-color: yellow;
    }

    .doctors-info-button2 {
        position: relative;
        top: 714px;
        left: 381px;
    }



    .lawyers-info-parent2 {
        position: relative;
        right: 2032px;
        width: 130px;
        height:130px;
        color: yellow;
        border: 7px green solid;
        display: flex;
        z-index:32;
        bottom: 130px;
    }

    .lawyers-info-icon2 {
        width: 130px!important;
        height:130px;
        color: yellow;
        background-color: yellow;
    }

    .lawyers-info-button2 {
        position: relative;
        top: 758px;
        right: 102px;
    }


    .legal-info-parent2 {
        position: relative;
        right: 1768px;
        width: 130px;
        height:130px;
        color: yellow;
        border: 7px green solid;
        display: flex;
        z-index:32;
        bottom: 260px;
    }

    .legal-info-icon2 {
        width: 130px!important;
        height:130px;
        color: yellow;
        background-color: yellow;
    }

    .legal-info-button2 {
        position: relative;
        top: 666px;
        right: 162px;
        white-space: nowrap;
    }

// Row two:


    .news-parent2 {
        position: relative;
        right: 2971px;
        width: 130px;
        height:130px;
        color: yellow;
        border: 7px green solid;
        display: flex;
        z-index:32;
        bottom: 230px;
    }

    .news-icon2 {
        width: 130px!important;
        height:130px;
        color: yellow;
        background-color: yellow;
    }

    .news-button2 {
        position: relative;
        top: 1496px;
        right: 124px;
        white-space: nowrap;
    }


// Row Three:


.dashboard-parent2 {
    position: relative;
    right: 2971px;
    width: 130px;
    height:130px;
    color: yellow;
    border: 7px green solid;
    display: flex;
    z-index:32;
    bottom: 73px;
}

.dashboard-icon2 {
    width: 130px!important;
    height:130px;
    codashboard yellow;
    background-color: yellow;
}

.dashboard-button2 {
    position: relative;
    top: 2160px;
    left: 130px;
    white-space: nowrap;
}


// Row Four:


.goods-parent2 {
    position: relative;
    right: 2971px;
    width: 130px;
    height:130px;
    color: yellow;
    border: 7px green solid;
    display: flex;
    z-index:32;
    top: 84px;
}

.goods-icon2 {
    width: 130px!important;
    height:130px;
    codashboard yellow;
    background-color: yellow;
}

.goods-button2 {
    position: relative;
    top: 1790px;
    left: 155px;
    white-space: nowrap;
}


.services-parent2 {
    position: relative;
    right: 2971px;
    width: 130px;
    height:130px;
    color: yellow;
    border: 7px green solid;
    display: flex;
    z-index:32;
    top: 241px;
}

.services-icon2 {
    width: 130px!important;
    height:130px;
    codashboard yellow;
    background-color: yellow;
}

.services-button2 {
    position: relative;
    top: 1793px;
    left: 129px;
    white-space: nowrap;


    }







    
    .reviews-parent2 {
        position: relative;
        right: 2971px;
        width: 130px;
        height:130px;
        color: yellow;
        border: 7px green solid;
        display: flex;
        z-index:32;
        top: 1048px;
    }

    .reviews-icon2 {
        width: 130px!important;
        height:130px;
        color: yellow;
        background-color: yellow;
   
    }

    .reviews-button2 {
        position: relative;
        top: 1458px;
        left: 417px;
        white-space: nowrap;
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
        right: 1535px;
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










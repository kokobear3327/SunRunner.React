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
import MailboxButton from '../shared/messaging-buttons/mailbox-button';
import ComposeButton from '../shared/messaging-buttons/compose-button';
import IncomeButton from '../shared/consumer-financials-buttons/income-button';
import BalanceButton from '../shared/consumer-financials-buttons/balance-button';
import FlowsButton from '../shared/consumer-financials-buttons/flows-button';
import ApplicationsButton from '../shared/remaining-buttons/applications-button'
import ProjectsButton from '../shared/remaining-buttons/projects-button'
import TemplatesButton from '../shared/remaining-buttons/templates-button';
import DriveButton from '../shared/remaining-buttons/drive-button';
import NetworkOneButton from '../shared/remaining-buttons/network-one-button';
import NetworkTwoButton from '../shared/remaining-buttons/network-two-button';
import WallOneButton from '../shared/remaining-buttons/wall-one-button';
import WallTwoButton from '../shared/remaining-buttons/wall-two-button';
import SocialMediaButton from '../shared/remaining-buttons/social-media-button';
import AnalyticsButton from '../shared/remaining-buttons/health-button';
import CalendarsButton from '../shared/remaining-buttons/calendars-button';
import PhoneButton from '../shared/remaining-buttons/phone-button';
import MessagesButton from '../shared/remaining-buttons/messages-button';
import ResearchButton from '../shared/remaining-buttons/research-button';

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
    <div className="tree-icon2">
    <img src="./logo-tree.png" alt="-"/>
    </div>
    <div className="tree-button2">
    <TreeButton></TreeButton>
    </div>
    </div>

    <div className="medical-info-parent2">
    <div className="medical-info-icon2">
    <img src="./logo-medical-info.png" alt="-"/>
    </div>
    <div className="medical-info-button2">
    <MedicalInfoButton></MedicalInfoButton>
    </div>
    </div>

    <div className="doctors-info-parent2">
    <div className="doctors-info-icon2">
    <img src="./logo-doctors.png" alt="-"/>
    </div>
    <div className="doctors-info-button2">
    <DoctorsButton></DoctorsButton>
    </div>
    </div>

    <div className="lawyers-info-parent2">
    <div className="lawyers-info-icon2">
    <img src="./logo-lawyers.png" alt="-"/></div>
    <div className="lawyers-info-button2">
    <LawyersButton></LawyersButton>
    </div>
    </div>

    <div className="legal-info-parent2">
    <div className="legal-info-icon2">
    <img src="./logo-legal-info.png" alt="-"/></div>
    <div className="legal-info-button2">
    <LegalInfoButton></LegalInfoButton>
    </div>
    </div>

    <div className="reviews-parent2">
    <div className="reviews-icon2">
    <img src="./logo-reviews.png" alt="-"/></div>
    <div className="reviews-button2">
    <ReviewsButton></ReviewsButton>
    </div>
    </div>


    
    <div className="news-parent2">
    <div className="news-icon2">
    <img src="./logo-news.png" alt="-"/>
    </div>
    <div className="news-button2">
    <NewsButton></NewsButton>
    </div>
    </div>

    <div className="dashboard-parent2">
    <div className="dashboard-icon2">
    <img src="./logo-dashboard.png" alt="-"/>
    
    </div>
    <div className="dashboard-button2">
    <DashboardButton></DashboardButton>
    </div>
    </div>


    <div className="goods-parent2">
    <div className="goods-icon2">
    <img src="./logo-goods.png" alt="-"/>
    </div>
    <div className="goods-button2">
    <GoodsButton></GoodsButton>
    </div>
    </div>


    <div className="services-parent2">
    <div className="services-icon2">
    <img src="./logo-services.png" alt="-"/>
    </div>
    <div className="services-button2">
    <ServicesButton></ServicesButton>
    </div>
    </div>

    <div className="investments-parent2">
    <div className="investments-icon2">
    <img src="./logo-investments.png" alt="-"/>
    </div>
    <div className="investments-button2">
    <InvestmentsButton></InvestmentsButton>
    </div>
    </div>


    <div className="income-parent2">
    <div className="income-icon2">
    <img src="./logo-income.png" alt="-"/>
    </div>
    <div className="income-button2">
    <IncomeButton></IncomeButton>
    </div>
    </div>

    <div className="balance-parent2">
    <div className="balance-icon2">
    <img src="./logo-balance.png" alt="-"/>
    </div>
    <div className="balance-button2">
    <BalanceButton></BalanceButton>
    </div>
    </div>

    <div className="flows-parent2">
    <div className="flows-icon2">
    <img src="./logo-flows.png" alt="-"/>
    </div>
    <div className="flows-button2">
    <FlowsButton></FlowsButton>
    </div>
    </div>

    <div className="compose-parent2">
    <div className="compose-icon2">
    <img src="./logo-compose.png" alt="-"/>
    </div>
    <div className="compose-button2">
    <ComposeButton></ComposeButton>
    </div>
    </div>

    <div className="mailbox-parent2">
    <div className="mailbox-icon2">
    <img src="./logo-mailbox.png" alt="-"/>
    </div>
    <div className="mailbox-button2">
    <MailboxButton></MailboxButton>
    </div>
    </div>

    <div className="applications-parent2">
    <div className="applications-icon2">
    <img src="./logo-applications.png" alt="-"/>
    </div>
    <div className="applications-button2">
    <ApplicationsButton></ApplicationsButton>
    </div>
    </div>

    <div className="projects-parent2">
    <div className="projects-icon2">
    <img src="./logo-projects.png" alt="-"/>
    </div>
    <div className="projects-button2">
    <ProjectsButton></ProjectsButton>
    </div>
    </div>

    <div className="templates-parent2">
    <div className="ptemplatesicon2">
    <img src="./logo-templates.png" alt="-"/>
    </div>
    <div className="templates-button2">
    <TemplatesButton></TemplatesButton>
    </div>
    </div>

    <div className="social-media-parent2">
    <div className="social-media-icon2">
    <img src="./logo-social-media.png" alt="-"/>
    </div>
    <div className="social-media-button2">
    <SocialMediaButton></SocialMediaButton>
    </div>
    </div>

    <div className="network1-parent2">
    <div className="network1-icon2">
    <img src="/logo-network1.png" alt="-"/>
    </div>
    <div className="network1-button2">
    <NetworkOneButton></NetworkOneButton>
    </div>
    </div>

    <div className="network2-parent2">
    <div className="network2-icon2">
    <img src="/logo-network2.png" alt="-"/>
    </div>
    <div className="network2-button2">
    <NetworkTwoButton></NetworkTwoButton>
    </div>
    </div>

    <div className="wall1-parent2">
    <div className="wall1-icon2">
    <img src="/logo-wall1.png" alt="-"/>
    </div>
    <div className="wall1-button2">
    <WallOneButton></WallOneButton>
    </div>
    </div>

    <div className="wall2-parent2">
    <div className="wall2-icon2">
    <img src="/logo-wall2.png" alt="-"/>
    </div>
    <div className="wall2-button2">
    <WallTwoButton></WallTwoButton>
    </div>
    </div>



    <div className="analytics-parent2">
    <div className="analytics-icon2">
    <img src="/logo-health.png" alt="-"/>
    </div>
    <div className="analytics-button2">
    <AnalyticsButton></AnalyticsButton>
    </div>
    </div>

    <div className="calendars-parent2">
    <div className="calendars-icon2">
    <img src="./logo-calendar.png" alt="-"/>
    </div>
    <div className="calendars-button2">
    <CalendarsButton></CalendarsButton>
    </div>
    </div>

    <div className="phone-parent2">
    <div className="phone-icon2">
    <img src="./logo-phone.png" alt="-"/>
    </div>
    <div className="phone-button2">
    <PhoneButton></PhoneButton>
    </div>
    </div>


    <div className="research-parent2">
    <div className="research-icon2">
    <img src="./logo-research.png" alt="-"/>
    </div>
    <div className="research-button2">
    <ResearchButton></ResearchButton>
    </div>
    </div>

    <div className="drive-parent2">
    <div className="drive-icon2">
    <img src="/logo-drive.png" alt="-"/>
    </div>
    <div className="drive-button2">
    <DriveButton></DriveButton>
    </div>
    </div>

    <div className="messages-parent2">
    <div className="messages-icon2">
    <img src="./logo-messages.png" alt="-"/>
    </div>
    <div className="messages-button2">
    <MessagesButton></MessagesButton>
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









    .tree-parent2 {
        position: relative;
        right: 2971px;
        width: 130px;
        height:130px;
        color: yellow;
        top: 260px;
        display: flex;
        z-index:32;
    }

    .tree-icon2 {
        width: 130px;
        height:130px;
        position: relative;
    }

    .tree-button2 {
        position: relative;
        top: 345px;
        right: 42px;
    }




    .medical-info-parent2 {
        position: relative;
        right: 2636px;
        width: 130px;
        height: 130px;
        top: 131px;
        display: flex;
        z-index:32;
    }

    .medical-info-icon2 {
        width: 130px!important;
        height:130px;
        color: yellow;
    }

    .medical-info-button2 {
        position: relative;
        top: 536px;
        left: 293px;
    }



    .doctors-info-parent2 {
        position: relative;
        right: 2334px;
        width: 130px;
        height: 130px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        z-index: 32;
    }

    .doctors-info-icon2 {
        width: 130px!important;
        height:130px;
    }

    .doctors-info-button2 {
        position: relative;
        top: 723px;
        left: 259px;
    }



    .lawyers-info-parent2 {
        position: relative;
        right: 2032px;
        width: 130px;
        height:130px;
        display: flex;
        z-index:32;
        bottom: 130px;
    }

    .lawyers-info-icon2 {
        width: 130px!important;
        height:130px;

    }

    .lawyers-info-button2 {
        position: relative;
        top: 764px;
        right: 224px;
    }


    .legal-info-parent2 {
        position: relative;
        right: 1768px;
        width: 130px;
        height:130px;
        display: flex;
        z-index:32;
        bottom: 260px;
    }

    .legal-info-icon2 {
        width: 130px!important;
        height:130px;
    }

    .legal-info-button2 {
        position: relative;
        top: 671px;
        right: 286px;
        white-space: nowrap;
    }

// Row two:


    .news-parent2 {
        position: relative;
        right: 2971px;
        width: 130px;
        height:130px;
        display: flex;
        z-index:32;
        bottom: 230px;
    }

    .news-icon2 {
        width: 130px!important;
        height:130px;
    }

    .news-button2 {
        position: relative;
        top: 1496px;
        right: 240px;
        white-space: nowrap;
    }


    .investments-parent2 {
        position: relative;
        right: 2636px;
        width: 130px;
        height:130px;
        display: flex;
        z-index:32;
        bottom: 750px;
    }

    .investments-icon2 {
        width: 130px!important;
        height:130px;

        position:relative;
    }

    .investments-button2 {
        position: relative;
        top: 1035px;
        right: 5px;
        white-space: nowrap;
    }

    .income-parent2 {
        position: relative;
        right: 2334px;
        width: 130px;
        height:130px;
        display: flex;
        z-index:32;
        bottom: 880px;
    }

    .income-icon2 {
        width: 130px!important;
        height:130px;

        position:relative;
    }

    .income-button2 {
        position: relative;
        top: 1582px;
        right: 761px;
        white-space: nowrap;
    }


    .balance-parent2 {
        position: relative;
        right: 2032px;
        width: 130px;
        height:130px;
        display: flex;
        z-index:32;
        bottom: 1010px;
    }

    .balance-icon2 {
        width: 130px!important;
        height:130px;

        position:relative;
    }

    .balance-button2 {
        position: relative;
        top: 1456px;
        right: 733px;
        white-space: nowrap;
    }


    .flows-parent2 {
        position: relative;
        right: 1768px;
        width: 130px;
        height:130px;
        display: flex;
        z-index:32;
        bottom: 1139px;
    }

    .flows-icon2 {
        width: 130px!important;
        height:130px;

        position:relative;
    }

    .flows-button2 {
        position: relative;
        top: 1580px;
        right: 705px;
        white-space: nowrap;
    }





// Row Three:


.dashboard-parent2 {
    position: relative;
    right: 2971px;
    width: 130px;
    height:130px;
    color: yellow;
    display: flex;
    z-index:32;
    bottom: 73px;
}

.dashboard-icon2 {
    width: 130px!important;
    height:130px;
    position:relative;
}

.dashboard-button2 {
    position: relative;
    top: 2178px;
    left: 6px;
    white-space: nowrap;
}

.social-media-parent2 {
    position: relative;
    right: 2636px;
    width: 130px;
    height:130px;
    color: yellow;
    display: flex;
    z-index:32;
    bottom: 1634px;
}

.social-media-icon2 {
    width: 130px!important;
    height:130px;
    position:relative;
}

.social-media-button2 {
    position: relative;
    top: 1363px;
    left: 466px;
    white-space: nowrap;
}


.applications-parent2 {
    position: relative;
    right: 2334px;
    width: 130px;
    height:130px;
    display: flex;
    z-index:32;
    bottom: 1244px;
}

.applications-icon2 {
    width: 130px!important;
    height:130px;

    position:relative;
}

.applications-button2 {
    position: relative;
    top: 1186px;
    right: 264px;
    white-space: nowrap;
}

.projects-parent2 {
    position: relative;
    right: 1768px;
    width: 130px;

    height:130px;
    display: flex;
    z-index:32;
    bottom: 1373px;
}

.projects-icon2 {
    width: 130px!important;
    height:130px;

    position:relative;
}

.projects-button2 {
    position: relative;
    top: 1516px;
    right: 986px;
    white-space: nowrap;
}

.templates-parent2 {
    position: relative;
    right: 2032px;
    width: 130px;
    height:130px;
    display: flex;
    z-index:32;
    bottom: 1503px;
}

.templates-icon2 {
    width: 130px!important;
    height:130px;

    position:relative;
}

.templates-button2 {
    position: relative;
    top: 1356px;
    right: 814px;
    white-space: nowrap;
}




// Row Four:


.goods-parent2 {
    position: relative;
    right: 2971px;
    width: 130px;
    height:130px;
    color: yellow;
    display: flex;
    z-index:32;
    top: 84px;
}

.goods-icon2 {
    width: 130px!important;
    height:130px;
    left:

}

.goods-button2 {
    position: relative;
    top: 1800px;
    left: 23px;
    white-space: nowrap;
}

.mailbox-parent2 {
    position: relative;
    right: 2636px;
    width: 130px;
    height:130px;
    display: flex;
    z-index:32;
    bottom: 827px;
}

.mailbox-icon2 {
    width: 130px!important;
    height:130px;

    position:relative;
}

.mailbox-button2 {
    position: relative;
    top: 1500px;
    right: 215px;
    white-space: nowrap;
}

.compose-parent2 {
    position: relative;
    right: 2334px;
    width: 130px;
    height:130px;
    display: flex;
    z-index:32;
    bottom: 696px;
}

.compose-icon2 {
    width: 130px!important;
    height:130px;

    position:relative;
}

.compose-button2 {
    position: relative;
    top: 1500px;
    right: 224px;
    white-space: nowrap;
}

.calendars-parent2 {
    display: flex;
    align-items: center;
    position: relative;
    bottom: 1222px;
    right: 2032px;
    justify-content: center;
    width: 130px;
    height: 130px;
    z-index: 3;
    bottom: 2114px;
}

.calendars-icon2 {
    width: 130px!important;
    height:130px;
    left: 72px;
    bottom: 3px;
    position:relative;
}

.calendars-button2 {
    position: relative;
    top: 1125px;
    left: 27px;
    white-space: nowrap;
}

.phone-parent2 {
    display: flex;
    align-items: center;
    position: relative;
    right: 1768px;
    justify-content: center;
    width: 130px;
    height: 130px;
    z-index: 3;
    bottom: 2242px;
}

.phone-icon2 {
    width: 130px!important;
    height:130px;
    left: 52px;
    position:relative;
}

.phone-button2 {
    position: relative;
    top: 1547px;
    left: 237px;
    white-space: nowrap;
}



// Row Five :

.services-parent2 {
    position: relative;
    right: 2971px;
    width: 130px;
    height:130px;
    color: yellow;
    display: flex;
    z-index:32;
    top: 241px;
}

.services-icon2 {
    width: 130px!important;
    height:130px;
}

.services-button2 {
    position: relative;
    top: 1800px;
    left: 8px;
    white-space: nowrap;
    }


.messages-parent2 {
    position: relative;
    right: 2636px;
    width: 130px;
    height:130px;
    color: yellow;
    display: flex;
    z-index:32;
    bottom: 2357px;
}

.messages-icon2 {
    width: 130px!important;
    height:130px;
}

.messages-button2 {
    position: relative;
    top: 1588px;
    left: 147px;
    white-space: nowrap;
    }
    



.research-parent2 {
    display: flex;
    align-items: center;
    position: relative;
    right: 2334px;
    justify-content: center;
    width: 130px;
    height: 130px;
    z-index: 3;
    bottom: 2097px;
}

.research-icon2 {
    width: 130px!important;
    height:130px;
    left:61px;
    position: relative;
}

.research-button2 {
    position: relative;
    top: 1964px;
    left: 372px;
    white-space: nowrap;
    }


    .wall1-parent2 {
        display: flex;
        align-items: center;
        position: relative;
        right: 2032px;
        justify-content: center;
        width: 130px;
        height: 130px;
        z-index: 3;
        bottom: 1447px;
    }
    
    .wall1-icon2 {
        width: 130px!important;
        height:130px;
        left: 65px;
        position:relative;
    }
    
    .wall1-button2 {
        position: relative;
        top: 2132px;
        right: 254px;
        white-space: nowrap;
    }


    .wall2-parent2 {
        display: flex;
        align-items: center;
        position: relative;
        right: 1768px;
        justify-content: center;
        width: 130px;
        height: 130px;
        z-index: 3;
        bottom: 1577px;
    }
    
    .wall2-icon2 {
        width: 130px!important;
        height:130px;
        left: 65px;
        position:relative;
    }
    
    .wall2-button2 {
        position: relative;
        top: 1992px;
        right: 76px;
        white-space: nowrap;
    }



    // Row Six :

    .reviews-parent2 {
        position: relative;
        right: 2971px;
        width: 130px;
        height:130px;
        color: yellow;
        display: flex;
        z-index:32;
        top: 1048px;
    }

    .reviews-icon2 {
        width: 130px!important;
        height:130px;
   
    }

    .reviews-button2 {
        position: relative;
        top: 1458px;
        left: 296px;
        white-space: nowrap;
    }

    .analytics-parent2 {
        display: flex;
        align-items: center;
        position: relative;
        bottom: 1419px;
        right: 2636px;
        justify-content: center;
        width: 130px;
        height: 130px;
        z-index: 3;
    }
    
    .analytics-icon2 {
        width: 130px!important;
        height:130px;
        position: relative;
        left: 65px;
    }
    
    .analytics-button2 {
        position: relative;
        left: 730px;
        top: 1443px;
    }

    .drive-parent2 {
        display: flex;
        align-items: center;
        position: relative;
        right: 2334px;
        justify-content: center;
        width: 130px;
        height: 130px;
        z-index: 3;
        bottom: 1932px;
    }
    
    .drive-icon2 {
        width: 130px!important;
        height:130px;
        left:61px;
        position: relative;
    }
    
    .drive-button2 {
        position: relative;
        top: 1963px;
        left: 232px;
        white-space: nowrap;
        }


    .network1-parent2 {
        display: flex;
        align-items: center;
        position: relative;
        right: 2032px;
        justify-content: center;
        width: 130px;
        height: 130px;
        z-index: 3;
        bottom: 893px;
    }
    
    .network1-icon2 {
        width: 130px!important;
        height:130px;
        left:69px;
        position: relative;
    }
    
    .network1-button2 {
        position: relative;
        top: 2147px;
        left: 78px;
        white-space: nowrap;
        }


    .network2-parent2 {
        display: flex;
        align-items: center;
        position: relative;
        right: 1768px;
        justify-content: center;
        width: 130px;
        height: 130px;
        z-index: 3;
        bottom: 1021px;
    }
    
    .network2-icon2 {
        width: 130px!important;
        height:130px;
        left:64px;
        position: relative;
    }
    
    .network2-button2 {
        position: relative;
        top: 1993px;
        left: 173px;
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
        z-index: 0;
        height: 2000px;
        width: 1536px;
        left: 1px;
    }

    .consumer-image-background2 {
        width: 1536px;
        height: 1940px;
        background: linear-gradient(270deg, #000000, #02091b);
        background-size: 400% 400%;
        animation: AnimationName 10s ease-in-out infinite;
        z-index:1;
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










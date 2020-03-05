import React from 'react';
import Link from 'next/link';
import Sound from 'react-sound';
// So you now we make an onClick event with first goal registering a console.log() 

const BalloonWrenchPicFilled = "/balloon-wrench-filled.svg"
const BalloonWrenchPic = "/balloon-wrench.svg"
const TwirlPicFilled = "/twirl-filled.svg" 
const TwirlPic = "/twirl.svg"
const SoundPicOn = "/sound-on.svg"
const SoundPic = "/sound.svg"
const MenuOverflowUp = "menu-overflow-up.png"
const MenuOverflowDown = "menu-overflow-down.png"


class Dock extends React.Component {

    componentDidMount() {
        console.log("componentDidMount() called")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate() called")
    }

    constructor(props) {
        super(props);
        this.state = {
            dockBoolean: true,
            balloonBoolean: false,
            soundBoolean: true,
            businessBoolean:true,
            menuOverflowBoolean: true,
            navBoolean: true
        }
    }


    buttonClicked() {
        
    }

    DockClicked = () => {
        this.setState({ dockBoolean: !this.state.dockBoolean } )
        if (this.state.dockBoolean) {
        let title = document.querySelector(".oea-title")
        title.style.display = "none"
        let content = document.querySelector(".oea-content")
        content.style.display = "flex"
        } else {
            let title = document.querySelector(".oea-title")
            title.style = "flex"
            let content = document.querySelector(".oea-content")
            content.style = "none"
        }
    }

    SoundClicked = (event) => {
        event.stopPropagation()
        console.log("SoundClicked called")
        this.setState({
            soundBoolean: !this.state.soundBoolean
        })

    }

    twirlContainerClicked = (event) => {
        event.stopPropagation()
        console.log("twirlContainerClicked")
        console.log(this.state.businessBoolean)
        this.setState(
            {businessBoolean: !this.state.businessBoolean}
        )
        console.log(this.state.businessBoolean)
        if (this.state.businessBoolean) {
            let jam = document.querySelector(".twirl-svg")
            jam.src = "/twirl-filled.svg" 
        } 
        else {
            let jam = document.querySelector(".twirl-svg")
            jam.src = "/twirl.svg"
        }
    }

    twirlContainerClicked = (event) => {
        event.stopPropagation()
        this.setState(
            {businessBoolean: !this.state.businessBoolean}
        )
        if (this.state.businessBoolean) {
            let jam = document.querySelector(".twirl-svg")
            jam.src = "/twirl-filled.svg" 
        } 
        else {
            let jam = document.querySelector(".twirl-svg")
            jam.src = "/twirl.svg"
        }
    }

    soundContainerClicked = (event) => {
        event.stopPropagation()
        console.log("soundContainerClicked")
        console.log(this.state.soundBoolean)
        this.setState(
            {soundBoolean: !this.state.soundBoolean}
        )
        if (this.state.soundBoolean) {
            let jam = document.querySelector(".sound-svg")
            jam.src = "/sound-filled.svg" 
        } 
        else {
            let jam = document.querySelector(".sound-svg")
            jam.src = "/sound.svg"
        }
    }

    balloonContainerClicked = (event) => {
        event.stopPropagation()
        console.log("balloonContainerClicked")
        console.log(this.state.soundBoolean)
        this.setState(
            {balloonBoolean: !this.state.balloonBoolean}
        )
        if (this.state.balloonBoolean) {
            let jam = document.querySelector(".balloon-wrench-svg")
            jam.src = "/balloon-wrench-filled.svg" 
        } 
        else {
            let jam = document.querySelector(".balloon-wrench-svg")
            jam.src = "/balloon-wrench.svg"
        }
    }

    menuOverflowClicked = (event) => {
        event.stopPropagation()
        console.log("menuOverflowClicked")
        console.log(this.state.menuOverflowBoolean)
        this.setState(
            {menuOverflowBoolean: !this.state.menuOverflowBoolean}
        )
        if (this.state.menuOverflowBoolean) {
            let jam = document.querySelector(".menu-overflow-svg")
            jam.src = "/menu-overflow-down.png" 
        } 
        else {
            let jam = document.querySelector(".menu-overflow-svg")
            jam.src = "/menu-overflow-up.png" 
        }
    }

    navContainerClicked = (event) => {
        event.stopPropagation()
        let title = document.querySelector(".oea-title")
        title.style.display = "none"
        let content = document.querySelector(".oea-content")
        content.style.display = "flex"
        this.setState(
            {navBoolean: !this.state.navBoolean}
        )
        if (this.state.navBoolean) {
            let title = document.querySelector(".oea-title")
            title.style.display = "none"
            let content = document.querySelector(".oea-content")
            content.style.display = "flex"
            } else {
                let title = document.querySelector(".oea-title")
                title.style = "flex"
                let content = document.querySelector(".oea-content")
                content.style = "none"
            }
    }




    render() {
    return (
        <div className="dock-panel-parent">
        <div className="dock-panel" onClick={this.DockClicked}>
            <div className="search-bar-parent">
                <img className="search-bar-png2" src="/SearchBar.png" alt="-" />
            </div>
            <div className="oea-title">
            <h4 className="oea-text">Omnibox Extension App</h4>
            </div>
            <div className="oea-content">
            <img className="back-button-svg" src="/back.svg"  alt="some" />
            <img className="forward-button-svg" src="/forward.svg" alt="some" />
            <img className="iris-svg" src="/iris.svg" alt="some" />
            <div id="twirl-container" onClick={this.twirlContainerClicked}>
            <img onClick={this.props.twirl} className="twirl-svg" src={ this.props.business ? TwirlPicFilled : TwirlPic} alt="some" />
            </div>
            <div onClick={ this.balloonContainerClicked } className="balloon-container">
            <img className="balloon-wrench-svg" src={ this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic } alt="some" />
            </div>
            <img onClick={this.NextTemplateClicked} className="next-template-svg" src="/down-arrow-empty.png"  alt="some" />
            <img className="previous-template-svg" src="/up-arrow-empty.png" alt="some" />
            <div onClick={this.menuOverflowClicked}>
            <img onClick={this.props.menu} className="menu-overflow-svg" src={MenuOverflowUp} alt="some" />
            </div>
            
            <div className="nav-container" onClick={this.navContainerClicked}>
            <img onClick={this.props.nav} className="nav-svg" src="/earth2.png" alt="some" />
            </div>
            <img className="history-svg" src="/history.svg" alt="some" />
            <img className="snake-svg" src="/snake.svg" alt="some" />
            <div onClick={ this.soundContainerClicked } className="sound-container">
            <img className="sound-svg" src="/sound.svg" alt="some" />
            </div>
            </div>
            </div>

        <style jsx>{`
        

        .dock-panel-parent {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 31px;
        }
        
        .dock-panel {
                width: 1536px;
                height: 76px;
                font-family: Montserrat;
                font-size: 23px;
                background-color: #000000;
                background-image: linear-gradient(0deg, #000000 0%, #414141 74%);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 161px;
                color: #2FA4E7;
                border: black;
                z-index: 1;
            } 
        
            .search-bar-parent {
                pointer-events: none;
                justifty-items: center;
                position: relat;
            }
        
            .search-bar-png2 {
                width:1536px;

            }

            .oea-title {
                display: flex;
                margin: auto;
            }
        
            .oea-text {
                font-family: Montserrat;
                font-size: 38px;
                bottom: 7px;
                position: absolute;                
                background: linear-gradient(to bottom, rgb(212,212,245), rgb(47, 164, 231));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .oea-content {
                display: none;
                font-family: Montserrat;
                font-size: 38px;
                position: relative;
                width: 1507px;
                height: 76px;
                top:13px;
                right: 1513px;
            }


            .back-button-svg {
                height: 66px;
                width: 66px;
                position: absolute;
            }
            .forward-button-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left: 76px;
            }

            .left-hexagons {
                height: 66px;
                width: 260px;
                position: absolute;
                left: 152px;
            }

            .previous-template-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left:410px;
            }
            
            .balloon-wrench-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left:492px;
            }        

            .nav-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                 
                left: 574px;
            }
            
            .menu-overflow-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left:656px;
            }

            .twirl-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left: 738px;
            }

            .history-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left:820px;
            }
        
            .iris-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left:902px;
            }

            .sound-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                 
                left: 984px;
            }

            .next-template-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left:1066px;
            }

            .right-hexagons {
                height: 66px;
                width: 260px;
                position: absolute;
                left: 1148px;
            }

            .snake-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                
                left: 1420px;
            }

            
            
            


            `}</style>







        </div>
    );
  }
}

  export default Dock;



//   <img className="iris-svg" src="/IrisPic" alt="some" />
//   <Link to={ this.props.business ? this.Business : this.Consumer}><img className="left-blank" src="./BalloonWrenchPic" } alt="some" /></Link>
//       <img onClick={ this.BalloonOn } className="balloon-wrench-svg" src={ this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic } alt="some" />
//       <img className="previous-template-svg" src="./PreviousTemplatePic.png" alt="some" />
//       <Link to="/"><img className="twirl-svg" src={ this.props.business ? TwirlPicFilled : TwirlPic} alt="some" /></Link>
//       <img className="next-template-svg" src="./NextTemplatePic"  alt="some" />
//       <img className="nav-svg" src="./nav.svg" alt="some" />
//       <img className="history-svg" src="./NextTemplatePic" alt="some" />
//       <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src="./NextTemplatePic" alt="some" /></Link>
//       <img className="snake-svg" src="./NextTemplatePic" alt="some" />
//       <img onClick={ this.SoundOn } className="sound-svg" src={ this.state.soundBoolean ? SoundPicOn : SoundPic } alt="some" />
//       <Sound playStatus={this.state.soundBoolean ? this.Playing : this.Paused} className="sound-svg2" id="s" url={BackgroundMusic}></Sound>
//       <Link to={ this.props.business ? this.Business : this.Consumer}><img className="right-blank" src="./NextTemplatePic" alt="some" /></Link>

//        <img onClick={this.DockClicked} className="right-hexagons" src="/hexagons.png" alt="some" />
// <img onClick={this.DockClicked} className="left-hexagons" src="/hexagons.png" alt="some" />
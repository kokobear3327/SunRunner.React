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



class Dock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dockBoolean: true,
            balloonBoolean: false,
            soundBoolean: false,
            businessBoolean:false
        }
    }


    buttonClicked() {
        
    }

    DockClicked = () => {
        this.setState({ dockBoolean: !this.state.dockBoolean } )
        console.log(this.state.dockBoolean)
        if (this.state.dockBoolean) {
            console.log("true called")
        let title = document.querySelector(".oea-title")
        title.style.display = "none"
        let content = document.querySelector(".oea-content")
        content.style.display = "inline"
        } else {
            let title = document.querySelector(".oea-title")
            title.style = "inline"
            let content = document.querySelector(".oea-content")
            content.style = "none"
        }
    }

    SoundOn = () => {
        console.log("SoundOn called")
    }

    // let jam = document.querySelector(".twirl-svg")
    // if (jam.src === "/twirl-filled.svg") {
    //     jam.src = "/twirl.svg"
    // } else if (jam.src === "/twirl.svg") {
    //  jam.src = "twirl-filled.svg"
    // }

    twirlContainerClicked = () => {
        console.log("twirlContainerClicked")
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
            <img className="left-hexagons" src="/hexagons.png" alt="some" />
            <img className="iris-svg" src="/iris.svg" alt="some" />
            <div id="twirl-container" onClick={this.twirlContainerClicked}>
            <img onClick={this.props.data} className="twirl-svg" src={ this.props.business ? TwirlPicFilled : TwirlPic} alt="some" />
            </div>
            <img onClick={ this.BalloonOn } className="balloon-wrench-svg" src={ this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic } alt="some" />
            <img className="next-template-svg" src="/down-arrow.png"  alt="some" />
            <img className="previous-template-svg" src="/up-arrow-empty.png" alt="some" />
            <img className="menu-overflow-svg" src="/illuminati.svg" alt="some" />
            <img className="nav-svg" src="/nav.svg" alt="some" />
            <img className="history-svg" src="/history.svg" alt="some" />
            <img className="snake-svg" src="/snake.svg" alt="some" />
            <img onClick={ this.SoundOn } className="sound-svg" src={ this.state.soundBoolean ? SoundPicOn : SoundPic } alt="some" />
            <img className="right-hexagons" src="/hexagons.png" alt="some" />
            </div>
            </div>

        <style jsx>{`
        .input-thingy {
            top: 400px;
        }

        .dock-panel-parent {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .dock-panel {
                width: 1507px;
                height: 76px;
                font-family: Montserrat;
                font-size: 23px;
                background-color: #000000;
                background-image: linear-gradient(0deg, #000000 0%, #414141 74%);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 177px;
                color: #2FA4E7;
                border: black;
                z-index: 1;
            } 
        
            .search-bar-parent {
                pointer-events: none;
            }
        
            .search-bar-png2 {
                width: 1507px;
                top:0px;
                padding-bottom: 158px;
            }

            .oea-title {

            }
        
            .oea-text {
                font-family: Montserrat;
                font-size: 38px;
                bottom: 4px;
                position: absolute;
                left: 523px;
            }

            .oea-content {
                font-family: Montserrat;
                font-size: 38px;
                bottom: 4px;
                position: absolute;
                left: 523px;
                display: none
            }


            .back-button-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 0px;
                right: 480px;
            }
            .forward-button-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                right: 394px;
            }

            .left-hexagons {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                right: 234px;
            }
            
            
            .balloon-wrench-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                right:100px;
            }
            
            
            .previous-template-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                left:300px;
            }

            .next-template-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                left:100px;
            }
            
            .twirl-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                left: 200px;
            }
        

            .nav-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                right:20px;
            }
            
            .history-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                left:502px;
            }
            
            .menu-overflow-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                left:100px;
            }
            
            .snake-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                left: 700px;
            }

            .iris-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                left:400px;
            }

            .sound-svg {
                height: 66px;
                width: 66px;
                position: absolute;
                top: 9px;
                left: 286px;
            }
            .right-hexagons {
                height: 66px;
                width: 177px;
                position: absolute;
                top: 9px;
                left: 786px;
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
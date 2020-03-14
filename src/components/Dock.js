import React, {useState, useEffect } from 'react';
import Link from 'next/link';
import Sound from 'react-sound';
import { useDispatch, useSelector } from 'react-redux'; 
import { nextTemplateClicked } from '../actions';
import { previousTemplateClicked } from '../actions';
import { balloonClicked } from '../actions';
import { isNewsContent } from '../actions';

// So you now we make an onClick event with first goal registering a console.log() 

const BalloonWrenchPicFilled = "/balloon-wrench-filled.svg"
const BalloonWrenchPic = "/balloon-wrench.svg"
const TwirlPicFilled = "/twirl-filled.svg" 
const TwirlPic = "/twirl.svg"
const SoundPicOn = "/sound-on.svg"
const SoundPic = "/sound.svg"
const MenuOverflowUp = "menu-overflow-up.png"
const SoundClick = "/sound-click.mp3"
const SoundOpening = "/sound-opening.mp3"
const SoundFailure = "/sound-failure2.mp3"


//input.value() is how you got the inputs value

export default function Dock(props) {
    let dispatch = useDispatch();
    let isNewsInputContent = useSelector(state => state.isNewsContent);
    let inputValue;
    const setValue = () => {
        let input = document.querySelector('.inpt');
        input.addEventListener("keydown", event => {
            if (event.keyCode === 13) {
                let inputForNews = input.value;
                dispatch(isNewsContent(inputForNews))
                console.log("lp" + isNewsInputContent);
            }
            // do something
          });
    }



    let theState = {
        dockBoolean: true,
        balloonBoolean: false,
        soundBoolean: true,
        businessBoolean:true,
        menuOverflowBoolean: true,
        navBoolean: true
    }
 
    const [state, setState] = useState(theState);
    let isNewsBalloon = useSelector(state => state.isNewsBalloon)
   

    useEffect(() => {
        if (isNewsBalloon) {
            let active = document.querySelector(".search")
            active.classList.add('active');
            let active2 = document.querySelector(".inpt")
            active2.focus();

            //This changes the ballon wrench button
            let stately = state.balloonBoolean;
            stately = setState(isNewsBalloon); 
            } 
        
        let inptSearch = document.querySelector("#inpt_search");
        inptSearch.addEventListener('focus', (event) => {
            let active = document.querySelector(".search")
            active.classList.add('active');
        })
        inptSearch.addEventListener('blur', (event) => {
            let inactive = document.querySelector('.search')
            inactive.classList.remove('active');
        })
    })

    const DockClicked = () => {
        setState({ dockBoolean: !state.dockBoolean } )
        let audioOpening = new Audio(SoundClick)
        let audioClosing = new Audio(SoundClick)
        if (state.dockBoolean) {
        let title = document.querySelector(".oea-title")
        title.style.display = "none"
        let content = document.querySelector(".oea-content")
        content.style.display = "flex"
        audioOpening.play()
        } else {
            let title = document.querySelector(".oea-title")
            title.style = "flex"
            let content = document.querySelector(".oea-content")
            content.style = "none"
            audioClosing.play()
        }
    }

    const SoundClicked = (event) => {
        let audio = new Audio(SoundClick)
        audio.play()
        event.stopPropagation()
        setState({
            soundBoolean: !state.soundBoolean
        })

    }

    const twirlContainerClicked = (event) => {
        event.stopPropagation()
        setState(
            {businessBoolean: !state.businessBoolean}
        )
        if (state.businessBoolean) {
            let audioOpening = new Audio(SoundOpening)
            audioOpening.play()
            let jam = document.querySelector(".twirl-svg")
            jam.src = "/twirl-filled.svg" 
        } 
        else {
            let audioOpening = new Audio(SoundOpening)
            audioOpening.play()
            let jam = document.querySelector(".twirl-svg")
            jam.src = "/twirl.svg"
        }
    }


    const soundContainerClicked = (event) => {
        event.stopPropagation()
        setState(
            {soundBoolean: !state.soundBoolean}
        )
        if (state.soundBoolean) {
            let jam = document.querySelector(".sound-svg")
            jam.src = "/sound-filled.svg" 
        } 
        else {
            let jam = document.querySelector(".sound-svg")
            jam.src = "/sound.svg"
        }
    }

    const balloonContainerClicked = (event) => {
        event.stopPropagation()
        dispatch(balloonClicked());

        setState(
            {balloonBoolean: !state.balloonBoolean}
        )
        if (state.balloonBoolean) {
            let jam = document.querySelector(".balloon-wrench-svg")
            jam.src = "/balloon-wrench-filled.svg" 
        } 
        else {
            let jam = document.querySelector(".balloon-wrench-svg")
            jam.src = "/balloon-wrench.svg"
        }
    }

    const menuOverflowClicked = (event) => {
        event.stopPropagation()
        setState(
            {menuOverflowBoolean: !state.menuOverflowBoolean}
        )
        if (state.menuOverflowBoolean) {
            let jam = document.querySelector(".menu-overflow-svg")
            jam.src = "/menu-overflow-down.png" 
        } 
        else {
            let jam = document.querySelector(".menu-overflow-svg")
            jam.src = "/menu-overflow-up.png" 
        }
    }

    const navContainerClicked = (event) => {
        event.stopPropagation()
        let title = document.querySelector(".oea-title")
        title.style.display = "none"
        let content = document.querySelector(".oea-content")
        content.style.display = "flex"
        setState(
            {navBoolean: !state.navBoolean}
        )
        if (state.navBoolean) {
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





    return (
        <div className="dock-panel-parent">
        <div className="dock-panel" onClick={DockClicked}>
            <div className="search-bar-parent">
            <div className="cntr-innr">
            <label className="search">
                <input type="text" value={inputValue} id="inpt_search" onChange={setValue} autoFocus minLength="4" maxLength="8" className="inpt"></input>
              </label>
          </div>
                <img className="search-bar-png2" src="/SearchBarEmpty.png" alt="-" />
            </div>
            <div className="oea-title">
            <h4 className="oea-text">Sun Runner</h4>
            </div>
            <div className="oea-content">
            <img className="back-button-svg" src="/back.svg"  alt="some" />
            <img className="forward-button-svg" src="/forward.svg" alt="some" />
            <img onClick={props.iris} className="iris-svg" src="/iris.svg" alt="some" />
            <div id="twirl-container" onClick={twirlContainerClicked}>
            <img onClick={props.twirl} className="twirl-svg" src={ props.business ? TwirlPicFilled : TwirlPic} alt="some" />
            </div>
            <div onClick={ balloonContainerClicked } className="balloon-container">
            <img onClick={props.balloon} className="balloon-wrench-svg" src={ state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic } alt="some" />
            </div>
            <div onClick={menuOverflowClicked}>
            <img onClick={props.menu} className="menu-overflow-svg" src={MenuOverflowUp} alt="some" />
            </div>
            
            <div className="nav-container" onClick={navContainerClicked}>
            <img onClick={props.nav} className="nav-svg" src="/earth2.png" alt="some" />
            </div>
            <img className="history-svg" src="/history.svg" alt="some" />
            <img className="snake-svg" src="/snake.svg" alt="some" />
            <div onClick={ soundContainerClicked } className="sound-container">
            <img className="sound-svg" src="/sound.svg" alt="some" />
            </div>
            </div>
            </div>

        <style jsx>{`

        
       .cntr-innr {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        position: relative;
        top:72px;
        left: 25px;
        z-index: 10;
   }
        .cntr {
            display: table;
            z-index:10;
       }

       /*** STYLES ***/
        .search {
            top: 14px;
            position:relative;
            right: 19px;
            height: 65px;
            width: 65px;
            box-sizing: border-box;
            margin: 0px 8px 7px 0px;
            padding: 7px 9px 0px 9px;
            border: 3px solid black;
            border-radius: 33px;
            transition: all 200ms ease;
            cursor: text;
            z-index:10;
       }
        .search:after {

       }
        .search.active, .search:hover {
            width: 1520px;
            position: relative;
            margin-right: 0px;
       }
        .search.active:after, .search:hover:after {
            height: 0px;
       }
        .search input {
            width: 100%;
            border: none;
            left: 14x;
            bottom: 4px;
            position: relative;
            box-sizing: border-box;
            font-family: Montserrat;
            font-size: 34px;
            color: inherit;
            background: transparent;
            outline-width: 0px;
       }

       .inpt {
        position: relative;
        left: 15px;
       }
        

        .dock-panel-parent {
            display: flex;
            align-items: center;
            justify-content: center;

        }
        
        .dock-panel {
            pointer-events: all;
            width: 1536px;
            height: 84px;
            font-family: Montserrat;
            font-size: 23px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 161px;
            color: #2FA4E7;
            border: black;
            z-index: 100;
            background: linear-gradient(270deg, #000000, #29292c);
            background-size: 400% 400%;
            animation: AnimationName 23s ease-in-out infinite;

        @keyframes AnimationName {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
            }
        }
        
            .search-bar-parent {
                pointer-events: all;
                justifty-items: center;
            }
        
            .search-bar-png2 {
                width:1536px;
                position: relative;
                padding-bottom: 227px;
            }

            .oea-title {
                display: flex;
                margin: auto;
            }
        
            .oea-text {
                font-family: Montserrat;
                display:flex;
                font-size: 38px;
                transform: scale(0.9);
                bottom: 7px;
                right: 10px;
                padding-left: 145px;
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
                top: 12px;
                width: 1507px;
                height: 76px;
                right: 1513px;
            }


            .back-button-svg {
                height: 62px;
                width: 62px;
                position: absolute;
            }
            .forward-button-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                left: 76px;
            }

            .left-hexagons {
                height: 66px;
                width: 260px;
                position: absolute;
                left: 152px;
            }

            
            .balloon-wrench-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                left:492px;
            }        

            .nav-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                 
                left: 574px;
            }
            
            .menu-overflow-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                left:656px;
            }

            .twirl-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                left: 738px;
            }

            .history-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                left:820px;
            }
        
            .iris-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                left:902px;
            }

            .sound-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                 
                left: 984px;
            }

            .next-template-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                left:1062px;
            }

            .right-hexagons {
                height: 62px;
                width: 260px;
                position: absolute;
                left: 1148px;
            }

            .snake-svg {
                height: 62px;
                width: 62px;
                position: absolute;
                
                left: 1420px;
            }
            `}</style>
        </div>
    );
}



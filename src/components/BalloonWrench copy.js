import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { balloonClicked } from '../actions';

// So if it loads, it dispatches an action, that is dispatched to a reducer setting isBalloon to true.

export default function BalloonWrench() {
    let balloon = "/balloon-wrench-view.png"
    let blank = "/cursor-blank.png";
    let dispatch = useDispatch();
    let selector = useSelector(state => state.isBalloon);
    let selector2 = useSelector(state => state.isNewsBalloon);

    useEffect(() => {
        let balloonCursor = document.querySelectorAll(".balloon-cursor");
        let balloonImage = document.querySelectorAll(".balloon-image");
        if (selector2) {
            balloonCursor.item(0).style.display = "none";
            balloonImage.item(0).style.display = "none";

        }
        window.addEventListener("mousemove", cursor);
        balloonCursor.item(0).style.display = "flex";
        balloonCursor.item(0).cursor = "none";
        
        function cursor(e) {
            balloonCursor.item(0).style.top = (e.pageY - 50) + 'px';
            balloonCursor.item(0).style.left = (e.pageX - 580) + 'px';
            }
        document.body.onkeyup = function(event) {
            if (event.keyCode == 32) {
                window.removeEventListener("mousemove", cursor);
                // Goal here is to make dock change and also make div dissapear
                // let balloonCursor = document.querySelectorAll(".balloon-cursor");
                // balloonCursor.item(0).style.display = "none";
                // also if you press spacebar, it switches the balloon wrench icon to default..
                let balloonImage = document.querySelectorAll(".balloon-image");
                balloonImage.item(0).src = "/cursor-blank.png";
                balloonImage.item(0).cursor = "default";
                let balloonCursor = document.querySelectorAll(".balloon-cursor");
                balloonCursor.item(0).cursor = "none";
            }
            
        }
        

        })

        return (
    <div className="balloon-parent">
    <div className="balloon-child">
    <div className="balloon-cursor"><img className="balloon-image" src={balloon} alt="-"/></div>
    </div>
    <style jsx>{` 
    .balloon-parent {
        height:2048px;
        width: 1536px;
    }

    .balloon-child {

    }

    .balloon-image {

    }

    .balloon-cursor {
        
    }

    .balloon-cursor img {
        width: 33px;
        height: 33px;
        pointer-events: all;
        cursor: none;
        z-index:5;
    }


    .consumer-button-container {
    
    }

    .tree-button-container {}


  `}</style>
      </div>
        )
    }

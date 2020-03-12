import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { mousedOver, mousedOff, newsBalloonClicked } from '../../actions';


export default function NewsButton() {
    const dispatch = useDispatch();
    const news = "news";
    let dashboard = "dashboard";
    let isNewsBalloon = useSelector(state => state.isNewsBalloon);

    
    useEffect(() => {
        let newsButton = document.querySelector(".news-button")
        newsButton.addEventListener("mouseover", () => {
        newsButton.classList.add("news-hovered")
        dispatch(mousedOver(news))})
        newsButton.addEventListener("mouseleave", () => {
        newsButton.classList.remove("news-hovered")
        dispatch(mousedOff(news))
    })
    
      });

      let isBalloon = useSelector(state => state.isBalloon)
      
       const clickNews = () => {
         if (isBalloon === true) { 
             dispatch(newsBalloonClicked())
         }
      }

    return (
        <div className="news-button-parent">
                <h1 onClick={clickNews} className="news-button">News</h1>
        
        <style jsx>{
                `
                .news-button-parent {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .news-button {
                    z-index:5;
                    width: 120px;
                    font-family: Montserrat;
                    font-size: 25px;
                    padding-left: 20px;
                    height: 45px;
                    position: relative;
                    left: 125px;
                    bottom: 1358px;
                    background-color: black;
                    color: white;
                    border:black;
                    text-decoration: none;
                    white-space: nowrap;
                    background: linear-gradient(to bottom, rgb(212,212,245), rgb(47, 164, 231));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    cursor: none;
                    transition: transform 1s;
                    transition-timing-function: ease-out;
                }

                .news-hovered {
                    cursor: none;
                    transform: scale(1.23);
                }


                `
        }
    
        </style>
        </div>
    );
  }


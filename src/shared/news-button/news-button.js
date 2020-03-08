import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { mousedOver } from '../../actions';


export default function NewsButton() {

    const worky = useSelector(state => state.isNews)
    console.log(worky);
    const dispatch = useDispatch();


    useEffect(() => {
    let newsButton = document.querySelector(".news-button")
    newsButton.addEventListener("mouseover", () => {
    newsButton.classList.add("news-hovered")
    dispatch(mousedOver());
    

    })

    
      });
    

    return (
        <div className="news-button-parent">
                <h1 className="news-button">News</h1>
        
        <style jsx>{
                `
                .news-button-parent {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .news-button {
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


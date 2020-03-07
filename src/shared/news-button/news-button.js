import React from 'react';
import MyProvider from '../../components/js/MyProvider';
import { MyContext } from '../../components/js/App';

export default class NewsButton extends React.Component {

    componentDidMount() {
        let newsButton = document.querySelector(".news-button")
        newsButton.addEventListener("mouseover", () => {
            console.log("Mouseover called")

            newsButton.classList.add("news-hovered")
    
        })
    }

    render() {
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
}

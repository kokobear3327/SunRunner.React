import React from 'react';


export default class Iris extends React.Component {
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
    <div className="iris-parent">
    <div className="iris-child">
    <video preload="auto" autoPlay loop className="iris-video" width="1536" height="2048">
    <source src="/Iris.mp4" type="video/mp4"></source>
    </video>

    </div>
    <style jsx>{` 
    .iris-parent {
        height:2048px;
        width: 1536px;
    }

    .iris-child {
        margin-left: 13px;
    }

  `}</style>
      </div>
        )
    }
}


// <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
// <source src="/Tree.mp4" 
//     type="video/mp4"></source>
//   </video>

// componentDidMount() {
//     const vid = document.querySelector(".fullscreen-video")
//     console.log(vid)
//     vid.play()










import React from 'react';

export default class Nav extends React.Component {
    state = {
        soundBoolean: false,
        balloonBoolean: false,
        panelOpen: false,
        businessBoolean: false,
        menuBoolean: false
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
    <div className="nav-parent">
    <div className="nav-child">
            <video preload="auto" autoPlay loop className="nav-video" width="1536" height="2048">
        <source src="/Tree.mp4" type="video/mp4"></source>
        </video>

    </div>
    <style jsx>{` 
    .nav-parent {
        height:2048px;
        width: 1536px;
    }

    .nav-child {
        margin-left: 13px;
    }

    .nav-video {
        position: relative;
        left: 2px;
    }
  `}</style>
      </div>
        )
    }
}

Nav.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}



import React from 'react';
import './nav-button.css';
// import { render } from '@testing-library/react';
import { Link } from "react-router-dom";
import NavPic from './nav.svg'; 

// This button takes you to the business compononet.  Secondly, you should engineer an angimation possibly where the 
//      grid itself rotates with the buttons fading in and out.  
//      also, the tornado should fill when its on the business side?
//      also add mouse-over functionality

function NavButton() {
    return (
        <div>
        <Link to="/WorldView">
            <div>
        <img className="nav-button" src={ NavPic } alt="hey" />

        </div>
        </Link>
        </div>
    );
  }
  
export default NavButton;

//<button className="consumer-dock-button">Globally available apps</button>
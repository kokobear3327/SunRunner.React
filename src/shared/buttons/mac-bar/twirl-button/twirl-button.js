import React from 'react';
import './twirl-button.css';
// import { render } from '@testing-library/react';
import { Link } from "react-router-dom";
import TwirlPic from './twirl.svg'; 

// This button takes you to the business compononet.  Secondly, you should engineer an angimation possibly where the 
//      grid itself rotates with the buttons fading in and out.  
//      also, the tornado should fill when its on the business side?

function TwirlButton() {
    return (
        <div>
        <Link to="/Business">
            <div>
        <img className="balloon-wrench" src={ TwirlPic } alt="hey" />

        </div>
        </Link>
        </div>
    );
  }
  
export default TwirlButton;

//<button className="consumer-dock-button">Globally available apps</button>
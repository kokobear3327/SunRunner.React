import React from 'react';
import './previous-template-button.css';
import { Link } from "react-router-dom";
import PreviousTemplatePic from './previous.svg'; 

function NextTemplateButton() {
    return (
        <div>
        <Link to="/PreviousTemplateView">
            <div>
        <img className="next-template" src={ PreviousTemplatePic } alt="hey" />
        </div>
        </Link>
        </div>
    );
  }
  
export default NextTemplateButton;


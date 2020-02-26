import React from 'react';
import './next-template-button.css';
import { Link } from "react-router-dom";
import NextTemplatePic from './next.svg'; 

function NextTemplateButton() {
    return (
        <div>
        <Link to="/NextTemplateView">
            <div>
        <img className="next-template" src={ NextTemplatePic } alt="hey" />
        </div>
        </Link>
        </div>
    );
  }
  
export default NextTemplateButton;


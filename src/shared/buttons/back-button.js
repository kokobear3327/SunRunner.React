import './back-button.css';
import React from 'react';
import { Link } from "react-router-dom";


// So you would add an onclick event where the router would take you to the route specified. 

function BackButton() {
    function handleBackFromTree() {
    console.log('handleClick Called');
        // Routing logic to take you to the treeView
    }
    return (
        <Link to="/Consumer">
        <button onClick={handleBackFromTree} className="reacty3">Back</button>
        </Link>
    );
  }
  
  export default BackButton;
import './consumer-dock.css';
import React from 'react'
import { Link } from "react-router-dom";

// So you would add an onclick event where the router would take you to the route specified. 

function ConsumerDock() {
    function handleClick() {
    console.log('handleClick Called');
        // Routing logic to take you to the treeView
    }
    return (
        <Link to="/ConsumerWithDockOpened">
        <div onClick={handleClick} className="consumer-dock-panel">
            <h4 className="oea-text">Omnibox Extension App</h4>
        </div>
        </Link>
    );
  }
  
  export default ConsumerDock;
import './consumer-dock.css';
import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../../images/SearchBar.png';

// So you would add an onclick event where the router would take you to the route specified. 

function ConsumerDock() {

    return (
        <Link to="/ConsumerWithDockOpened">
        <div class="consumer-dock-panel-parent">
        <div className="consumer-dock-panel">
            <div className="search-bar-parent">
            <img className="search-bar-png2" src={SearchBar} alt="-" />
            </div>
            <h4 className="oea-text">Omnibox Extension App</h4>
        </div>
        </div>
        </Link>
    );
  }
  
  export default ConsumerDock;
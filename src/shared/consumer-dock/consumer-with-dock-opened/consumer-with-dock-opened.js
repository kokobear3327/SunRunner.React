import './consumer-with-dock-opened.css';
import React from 'react'
import { Link } from "react-router-dom";
import MacBar from '../../mac-bar/mac-bar';

function ConsumerWithDockOpened() {

    return (
        
        <div class="consumer-dock-panel-parent">
        <Link to="/Consumer">

        <MacBar business={false}></MacBar>
        </Link>
        </div>
    );
  }
  
  export default ConsumerWithDockOpened;

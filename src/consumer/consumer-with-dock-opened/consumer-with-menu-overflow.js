import './consumer-with-dock-opened.css';
import React from 'react'
import consumer from '../../images/ConsumerBlank.png'; 
import MenuOverflowOpen from '../../shared/mac-bar/menu-overflow-open/menu-overflow-open';

// So you would add an onclick event where the router would take you to the route specified. 
function ConsumerWithMenuoverFlowOpen() {
    return (
        <div>
        <img className="consumer" src={ consumer } alt="text" />
        <MenuOverflowOpen></MenuOverflowOpen>
        </div>
    );
  }
  
  export default ConsumerWithMenuoverFlowOpen;
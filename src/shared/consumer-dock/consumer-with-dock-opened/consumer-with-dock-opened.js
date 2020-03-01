import './consumer-with-dock-opened.css';
import React from 'react'
import MacBar from '../../mac-bar/mac-bar';

function ConsumerWithDockOpened() {

    return (
        
        <div class="consumer-dock-panel-parent">
        <MacBar business={false}></MacBar>
        </div>
    );
  }
  
  export default ConsumerWithDockOpened;

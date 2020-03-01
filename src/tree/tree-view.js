import React from 'react'
import TreePic from '../images/Tree.png';
import BackButton from '../shared/buttons/back-button';
import './tree-view.css';
// import TreeWithDockOpened from './tree-with-dock-opened';
import TreeButtons from './tree-buttons/tree-buttons';
import ConsumerDock from '../shared/consumer-dock/consumer-dock';
// import Video from 'react-html5video';
import TreeVid from '../videos/Tree.mp4';

function TreeView() {
    return (
        <div className="tree-parent">
        <div className="tree-child">
        <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
            <source src={TreeVid} 
                type="video/mp4"></source>
        </video>
        <div className="tree-dock">
        <BackButton></BackButton>
        <ConsumerDock></ConsumerDock>
        <TreeButtons></TreeButtons>
        </div>
        </div>
        </div>
    );
  }

  
  
  export default TreeView;


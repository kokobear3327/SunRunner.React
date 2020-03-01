import React from 'react'
import './tree-view.css';
import TreeButtons from './tree-buttons/tree-buttons';
import TreeVid from '../videos/Tree.mp4';
import TreeDock from './tree-docks/tree-dock';

function TreeView() {
    return (
        <div className="tree-view-parent">
        <div className="tree-view-child">
        <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
        <source src={TreeVid} type="video/mp4"></source>
        </video>
        <div className="tree-dock">
        <TreeDock></TreeDock>
        <TreeButtons></TreeButtons>
        </div>
        </div>
        </div>
    );
  }

  
  
  export default TreeView;


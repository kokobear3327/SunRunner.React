import React from 'react'
import TreePic from '../images/Tree.png';
import BackButton from '../shared/buttons/back-button';
import './tree-view.css';
import TreeWithDockOpened from './tree-with-dock-opened';

function TreeView() {
    return (
        <div className="tree-parent">
        <div className="tree-child">
        <img className="tree-image" src={ TreePic } alt="something"/>
        <div className="tree-dock">
        <BackButton></BackButton>
        </div>
        </div>
        </div>
    );
  }
  
  export default TreeView;
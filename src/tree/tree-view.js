import React from 'react'
import TreePic from '../images/Tree.png';
import BackButton from '../shared/buttons/back-button';
import './tree-view.css';
import TreeWithDockOpened from './tree-with-dock-opened';
import TreeButtons from './tree-buttons/tree-buttons';

function TreeView() {
    return (
        <div className="tree-parent">
        <div className="tree-child">
        <img className="tree-image" src={ TreePic } alt="something"/>
        <div className="tree-dock">
        <BackButton></BackButton>
        <TreeWithDockOpened></TreeWithDockOpened>
        <TreeButtons></TreeButtons>
        </div>
        </div>
        </div>
    );
  }
  
  export default TreeView;
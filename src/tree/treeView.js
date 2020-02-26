import React from 'react'
import TreePic from '../images/Tree.png';
import BackButton from '../shared/buttons/back-button'

function TreeView() {
    return (
        <div>
        <img src={ TreePic } alt="something"/>
        <BackButton></BackButton>
        </div>
    );
  }
  
  export default TreeView;
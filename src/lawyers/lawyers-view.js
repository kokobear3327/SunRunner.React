import React from 'react'
import TreePic from '../images/Tree.png';
import BackButton from '../shared/buttons/back-button'
import './lawyers-view.css'

function MedicalInfoView() {
    return (
        <div>
        <h1>"Here is the lawyers info page"</h1>
        <img src={ TreePic } alt="something"/>
        <BackButton></BackButton>
        </div>
    );
  }
  
  export default MedicalInfoView;
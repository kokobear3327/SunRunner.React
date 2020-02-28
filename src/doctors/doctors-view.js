import React from 'react';
import './doctors-view.css';
import BackButton from '../shared/buttons/back-button';
import TreePic from '../images/Tree.png';

export default function DoctorsView() {
  return (

        <div>
        <h1>"Here is the Medical Info page"</h1>
        <img src={ TreePic } alt="something"/>
        <BackButton></BackButton>
        </div>
    );
}

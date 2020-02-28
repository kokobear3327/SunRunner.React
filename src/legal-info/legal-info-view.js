import React from 'react'
import TreePic from '../images/Tree.png';
import BackButton from '../shared/buttons/back-button'
import './legal-info-view.css'

export default function LegalInfoView() {
    return (
        <div>
        <h1>"Here is the Legal Info page"</h1>
        <img src={ TreePic } alt="something"/>
        <BackButton></BackButton>
        </div>
    );
  }
  
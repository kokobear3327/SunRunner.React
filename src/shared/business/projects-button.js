import './projects-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ProjectsButton() {

    return (
        <div class="business-projects-button-parent">
        <Link to="/BusinessProjects">
        <button className="business-projects-button">Projects</button>
        </Link>
        </div>
    );
  }
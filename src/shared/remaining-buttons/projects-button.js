import './projects-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ProjectsButton() {

    return (
        <div class="projects-button-parent">
        <Link to="/Projects">
        <button className="projects-button">Projects</button>
        </Link>
        </div>
    );
  }
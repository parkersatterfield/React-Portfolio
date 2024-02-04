import './Project.css';
import { Link } from 'react-router-dom';
import React from "react";

function Project(props) {
    return (
        <div className="project">
            <Link to={props.projectLink}>
                <img id="example" src={props.projectImage} alt={props.projectName} />
            </Link>
        </div>
    )
}

export default Project;

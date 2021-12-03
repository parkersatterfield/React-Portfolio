import './Project.css'
import React from "react"

function Project(props) {
    return (
        <div className="project">
            <a href={props.projectLink} target="_blank" rel="noreferrer">
                <img id="example" src={props.projectImage} alt={props.projectName} />
                <figcaption>{props.projectName}</figcaption>
            </a>
        </div>
    )
}

export default Project;

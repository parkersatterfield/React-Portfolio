import './Project.css'
import React from "react"

function Project(props) {
    return (
        <div className="project">
            <a href={props.projectLink} target="_blank" rel="noreferrer">
                <img id="example" src={props.projectImage} alt={props.projectName} />
                {/* <div className="overlay">
                    <h1 className="name">{props.projectName}</h1>
                    <h2>{props.projectTech}</h2>
                </div> */}
                {/* <figcaption>{props.projectName}</figcaption> */}
            </a>
        </div>
    )
}

export default Project;

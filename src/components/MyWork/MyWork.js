import './MyWork.css'
import '../Project/Project'
import Project from '../Project/Project';

// Project Images
import cmsImage from "../../images/CMS.png"
import reloc8Image from "../../images/Reloc8.png"
import weatherImage from "../../images/Weather.png"
import dibsImage from "../../images/Dibs.png"
import blob from "./blob.svg"

// Reloc8 Project Info
const reloc8Name = "Reloc8"
const reloc8Link = "https://parkersatterfield.github.io/Project-1/"

// Weather App Project Info
const weatherName = "Weather App"
const weatherLink = "https://parkersatterfield.github.io/Weather-Dashboard/"

// CMS Project Info
const cmsName = "Employee Tracker CMS"
const cmsLink = "https://github.com/parkersatterfield/Employee-Tracker-CMS"

// Dibs Project Info
const dibsName = "Dibs"
const dibsLink = "https://dibsfunding.com/"

function MyWork() {   
    document.body.style = `
    background-image: url(${blob}); 
    background-repeat: no-repeat;
    background-position: top 90% left -300px;
    background-size: 160vh;
    `;
    
    // document.body.style = 'background: #ACA9BB;';
    return (
        <div className = "portfolioSection">
            <h1>My Work</h1>
            <div className='body'>
                <div className = 'projectContainer'>
                    <Project projectLink = {reloc8Link} projectImage={reloc8Image} projectName = {reloc8Name}/>
                    <Project projectLink = {dibsLink} projectImage={dibsImage} projectName = {dibsName}/>
                    <Project projectLink = {weatherLink} projectImage={weatherImage} projectName = {weatherName}/>
                    <Project projectLink = {cmsLink} projectImage={cmsImage} projectName = {cmsName}/>
                </div>
            </div>
        </div>
    )
}

export default MyWork;
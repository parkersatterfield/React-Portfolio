import './MyWork.css'
import '../Project/Project'
import Project from '../Project/Project';

// Project Images
import cmsImage from "../../images/CMS.png"
import reloc8Image from "../../images/Reloc8.png"
import weatherImage from "../../images/Weather.png"


// Reloc8 Project Info
const reloc8Name = "Reloc8"
const reloc8Link = "https://parkersatterfield.github.io/Project-1/"

// Weather App Project Info
const weatherName = "Weather App"
const weatherLink = "https://parkersatterfield.github.io/Weather-Dashboard/"

// CMS Project Info
const cmsName = "Employee Tracker CMS"
const cmsLink = "https://github.com/parkersatterfield/Employee-Tracker-CMS"

function MyWork() {    
    return (
        <div className = 'projectContainer'>
            <Project className = 'projects sub1' projectLink = {reloc8Link} projectImage={reloc8Image} projectName = {reloc8Name}/>
            <Project className = 'projects main' projectLink = {weatherLink} projectImage={weatherImage} projectName = {weatherName}/>
            <Project className = 'projects sub2' projectLink = {cmsLink} projectImage={cmsImage} projectName = {cmsName}/>
        </div>
    )
}

export default MyWork;
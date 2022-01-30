import './MyWork.css'
import '../Project/Project'
import Project from '../Project/Project';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion';

// Project Images
import cmsImage from "../../images/CMS.png"
import reloc8Image from "../../images/Reloc8.png"
import weatherImage from "../../images/Weather.png"
import dibsImage from "../../images/Dibs.png"
import sibsImage from "../../images/Sibs.png"
import strikeImage from "../../images/Strike.png"

// Reloc8 Project Info
const reloc8Name = "Reloc8"
const reloc8Link = "/project/reloc8"

// Weather App Project Info
const weatherName = "Weather App"
const weatherLink = "/project/weatherapp"

// CMS Project Info
const cmsName = "Employee Tracker CMS"
const cmsLink = "/project/employeetracker"

// Dibs Project Info
const dibsName = "Dibs"
const dibsLink = "/project/dibs"

// SibsForever Project Info
const sibsName = "SibsForever"
const sibsLink = "/project/sibsforever"

// Strike Project Info
const strikeName = "Strike"
const strikeLink = "/casestudy/strike"

function MyWork() {   
    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    document.body.style = `
    background-image: ""; background-color:#FAFAFA`;
    
    return (
        <motion.div
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={transition}
            className="myWorkContainer">
            <h1>Some of My Work</h1>
            <div className="mainContainer">
                <div className = 'projectContainer'>
                    <div className="flexRow">
                        <Project projectImage={sibsImage} projectName = {sibsName} projectLink={sibsLink}/>
                    </div>
                    <div className="flexRow">
                        <Project projectLink = {reloc8Link} projectImage={reloc8Image} projectName = {reloc8Name}/>
                    </div>
                    <div className="flexRow switch">
                        <Project projectLink = {dibsLink} projectImage={dibsImage} projectName = {dibsName}/>
                    </div>
                    <div className="flexRow">
                        <Project projectLink = {weatherLink} projectImage={weatherImage} projectName = {weatherName}/>
                    </div>
                    <div className="flexRow switch">
                        <Project projectLink = {cmsLink} projectImage={cmsImage} projectName = {cmsName}/>
                    </div>
                    <div className="flexRow switch">
                        <Project projectLink = {strikeLink} projectImage={strikeImage} projectName = {strikeName}/>
                    </div>
                </div>

            </div>
            <Footer />
        </motion.div>
    )
}

export default MyWork;
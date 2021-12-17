import './MyWork.css'
import '../Project/Project'
import Project from '../Project/Project';
import {motion} from 'framer-motion';

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
    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    // document.body.style = `
    // background-image: url(${blob}); 
    // background-repeat: no-repeat;
    // background-position: top 90% left -300px;
    // background-size: 160vh;
    // `;

    document.body.style = `
    background-image: ""; `;
    
    // document.body.style = 'background: #ACA9BB;';
    return (
        // <motion.div 
        //     className = "portfolioSection"
            // exit={{opacity: 0}}
            // initial={{opacity: 0}}
            // animate={{ opacity: 1 }}
            // transition={transition}>
        //     <div className='body'>
                // <div className = 'projectContainer'>
                //     <Project projectLink = {reloc8Link} projectImage={reloc8Image} projectName = {reloc8Name}/>
                //     <Project projectLink = {dibsLink} projectImage={dibsImage} projectName = {dibsName}/>
                //     <Project projectLink = {weatherLink} projectImage={weatherImage} projectName = {weatherName}/>
                //     <Project projectLink = {cmsLink} projectImage={cmsImage} projectName = {cmsName}/>
                // </div>
        //     </div>
        // </motion.div>

        <motion.div 
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={transition}
            className="mainContainer">
            <div className = 'projectContainer'>
                <div className="flexRow">
                    <Project projectLink = {reloc8Link} projectImage={reloc8Image} projectName = {reloc8Name}/>
                    <div className="desc">
                        <h4>Reloc8</h4>
                        <p>Reloc8 was the first project that we did for bootcamp. As a team, we wanted to put together 2 APIs and throw them together in an app. Originally, we wanted to use the Zillow API and the Monster API to allow for users to search a job and then receive housing results based on the job location, but we were having some issued with both the Monster and Zillow public API keys. We ended up going with the Yelp API and hard coding a list of jobs.</p>
                    </div>
                </div>
                <div className="flexRow switch">
                    <Project projectLink = {dibsLink} projectImage={dibsImage} projectName = {dibsName}/>
                    <div className="desc">
                        <h4>Dibs</h4>
                        <p>While working at my first job out of school, I decided I wanted to pursue a startup project that my friend and I had been working on for a little while. Without knowing anything about web design, I decided to try and learn how to code and build an MVP using bubble.io. Dibs is an online social networking and seed funding platform for early stage startups. </p>
                    </div>
                </div>
                <div className="flexRow">
                    <Project projectLink = {weatherLink} projectImage={weatherImage} projectName = {weatherName}/>
                    <div className="desc">
                        <h4>Weather Dashboard</h4>
                        <p>Building a weather app is a right of passage for front end developers. This was one of the first bootcamp assignments. We were given an image of what it was supposed to look like and the API it was supposed to use and told to build it.</p>
                    </div>
                </div>
                <div className="flexRow switch">
                    <Project projectLink = {cmsLink} projectImage={cmsImage} projectName = {cmsName}/>
                    <div className="desc">
                        <h4>Employee Tracker CMS</h4>
                        <p>Here is another bootcamp assignment. This was my first Node.js terminal app. It utilizes MySQL and Node. In the future, I'd like to build a deployed front end for this as a little SaaS project. </p>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default MyWork;
import './WorkDetail.css'
import '../Project/Project'
import { useLocation } from 'react-router';
import Footer from '../Footer/Footer';
import {motion} from 'framer-motion';

// Dibs Images
import dibsImage from "../../images/Dibs.png"
import dibsImage2 from "../../images/Dibs2.png"
// import dibsImage3 from "../../images/Dibs3.png"

// Reloc8 Images
import reloc8Image from "../../images/Reloc8.png"
import reloc8Image2 from "../../images/Reloc82.jpg"
// import reloc8Image3 from "../../images/Reloc83.png"

// Employee Tracker Images
import employeeTrackerImage from "../../images/CMS.png"
import employeeTrackerImage2 from "../../images/CMS2.png"
// import employeeTrackerImage3 from "../../images/CMS3.png"

// Weather App Images
import weatherAppImage from "../../images/Weather.png"
import weatherAppImage2 from "../../images/Weather2.jpg"
// import weatherAppImage3 from "../../images/Weather3.png"

// Sibs Images
import sibsImage from "../../images/Sibs.png"
import sibsImage2 from "../../images/Sibs2.jpg"
// import sibsImage3 from "../../images/Sibs3.png"

// Strike Images
import strikeImage from "../../images/Strike.png"
import strikeImage2 from "../../images/Strike2.png"
// import strikeImage3 from "../../images/Strike3.png"

// XML to SQL Images
import xmltosqlImage from "../../images/XMLtoSQL.png"
import xmltosqlImage2 from "../../images/XMLtoSQL2.png"


// Reloc8 Project Info
const reloc8Name = "Reloc8"
const reloc8Link = "https://parkersatterfield.github.io/Reloc8/"
const reloc8Link2 = "https://github.com/parkersatterfield/Reloc8"
const reloc8Link2Desc = "<See the Code />"
const reloc8Desc = 'Reloc8 was the first project that we did for bootcamp. As a team, we wanted to put together 2 APIs and throw them together in an app. Originally, we wanted to use the Zillow API and the Monster API to allow for users to search a job and then receive housing results based on the job location, but we were having some issued with both the Monster and Zillow public API keys. We ended up going with the Yelp API and hard coding a list of jobs.'
const reloc8Tags = 'HTML, CSS, JQuery, Yelp API'

// Weather App Project Info
const weatherAppName = "Weather App"
const weatherAppLink = "https://parkersatterfield.github.io/Weather-Dashboard/"
const weatherAppLink2 = "https://github.com/parkersatterfield/Weather-Dashboard"
const weatherAppLink2Desc = "<See the Code />"
const weatherAppDesc = 'Building a weather app is a right of passage for front end developers. This was one of the first bootcamp assignments. We were given an image of what it was supposed to look like and the API it was supposed to use and told to build it.'
const weatherAppTags = 'OpenWeather API, HTML, CSS, Vanilla JS'

// CMS Project Info
const employeeTrackerName = "Employee Tracker CMS"
const employeeTrackerLink = "https://github.com/parkersatterfield/Employee-Tracker-CMS"
const employeeTrackerDesc = 'Here is another bootcamp assignment. This was my first Node.js terminal app. It utilizes MySQL and Node. In the future, I\'d like to build a deployed front end for this as a little SaaS project.'
const employeeTrackerTags = 'Node.js, MySQL, JS'

// Dibs Project Info
const dibsName = "Dibs"
const dibsLink = "https://dibsfunding.com/"
const dibsDesc = 'While working at my first job out of school, I decided I wanted to pursue a startup project that my friend and I had been working on for a little while. Without knowing anything about web design, I decided to try and learn how to code and build an MVP using bubble.io. Dibs is an online social networking and seed funding platform for early stage startups.'
const dibsTags = 'Bubble.io, UI/UX, iFrame, payment integration'

// SibsForever Project Info
const sibsName = "Sibs Forever"
const sibsLink = "https://sibsforever.org"
const sibsLink2 = "https://www.figma.com/file/gsBMRuJMJHqYCs9BKD3Bv1/SibsForever?node-id=142%3A407"
const sibsLink2Desc = "See the Designs"
const sibsDesc = 'Sibs was the only project that I landed during my time freelancing on UpWork. I found the UpWork market extremely competitive and filled with wordpress developers that were too hard to compete with for basic web development projects. This led me to start learning more in depth concepts of UX and design to try and offer services in these areas. Working on Sibs was a great experience. My client was an extremely knowledgeable backend engineer and had developed a great platform for those who had lost a loved one. I offered my design and frontend development services to give the Sibs Team a high fidelity prototype in Figma and then some stylized React components for the navbar, landing page, and footer.'
const sibsTags = 'UpWork, Figma, UI Design, Landing Page Design, Branding'

// Strike Project Info
const strikeName = "Strike"
const strikeLink = "https://www.figma.com/file/AYaEgLvShqEfcRqJbeF217/STRIKE?node-id=6%3A538"
const strikeDesc = 'I have been a mediocre golf player since I was about 8 years old. I play pretty often, but I would love to play more. I recently learned about a few golfing apps such as The Grint and 18 Birdies that act as a social networking and golf tools app. I was excited to try them, but disappointed when I actually tried to use them. For me, the social aspect was lacking, the features were complicated, and the UI was pretty bad. This led me to try my hand at prototyping some UX for a similar app that I called Strike.'
const strikeTags = 'Figma, User Personas, Storyboard, Hi-Fi Prototyping, Mockups'

// XML to SQL Info
const xmltosqlName = "XML to SQL"
const xmltosqlLink = "https://www.xmltosql.com" 
const xmltosqlLink2 = "https://github.com/parkersatterfield/xmlbatch" 
const xmltosqlDesc = 'While working at Fieldster, I build an internal tool to help the data team convert new clients from their old CRM to Fieldster\'s. To do this, we needed to get their old data, convert it into SQL data, and spin them up a client database. At the time, it seemed like there was no way to easily (or freely) do this - so I offered to build something. By looking at the XML nodes, you can determine what the table names, column names, and data types should be. I built this with C# and hooked it up to the local environment and manually sent the .bat file. After building that, I wanted to build an interface for it and publish it for others to use. I used React for the interface, and after deciding that giving users create database access to my server was a horrible idea without at least building a login, I decided to take a different approach and just output a sql file with the commands that I was going to run on the server. This simplified the project quite a bit, but I am happy with how it turned out.'
const xmltosqlLink2Desc = "<See the Code />"
const xmltosqlTags = 'React, SQL, Node'

function MyWork() {  
    let projectName = '';
    let projectLink = '';
    let projectLink2 = '';
    let projectLink2Desc = '';
    let projectImage = '';
    let projectImage2 = '';
    let projectDesc = '';
    let projectTags = '';
    
    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    document.body.style = `
    background-image: ""; background-color:#FAFAFA`;
    
    let location = useLocation().pathname;

    if (location === '/project/sibsforever') {
        projectName = sibsName;
        projectLink = sibsLink;    
        projectLink2 = sibsLink2;
        projectLink2Desc = sibsLink2Desc;
        projectDesc = sibsDesc;
        projectTags = sibsTags;
        projectImage = sibsImage;
        projectImage2 = sibsImage2;
        // projectImage3 = sibsImage3;
    } else if (location === '/project/reloc8') {
        projectName = reloc8Name;
        projectLink = reloc8Link;        
        projectLink2 = reloc8Link2;
        projectLink2Desc = reloc8Link2Desc;
        projectDesc = reloc8Desc;
        projectTags = reloc8Tags;
        projectImage = reloc8Image;
        projectImage2 = reloc8Image2;
        // projectImage3 = reloc8Image3;
    } else if (location === '/project/dibs') {
        projectName = dibsName;
        projectLink = dibsLink;
        projectDesc = dibsDesc;
        projectTags = dibsTags;
        projectImage = dibsImage;
        projectImage2 = dibsImage2;
        // projectImage3 = dibsImage3;
    } else if (location === '/project/weatherapp') {
        projectName = weatherAppName;
        projectLink = weatherAppLink;
        projectLink2 = weatherAppLink2;
        projectLink2Desc = weatherAppLink2Desc;
        projectDesc = weatherAppDesc;
        projectTags = weatherAppTags;
        projectImage = weatherAppImage;
        projectImage2 = weatherAppImage2;
        // projectImage3 = weatherAppImage3;
    } else if (location === '/project/employeetracker') {
        projectName = employeeTrackerName;
        projectLink = employeeTrackerLink;
        projectDesc = employeeTrackerDesc;
        projectTags = employeeTrackerTags;
        projectImage = employeeTrackerImage;
        projectImage2 = employeeTrackerImage2;
        // projectImage3 = employeeTrackerImage3;
    }  else if (location === '/project/xmltosql') {
        projectName = xmltosqlName;
        projectLink = xmltosqlLink;
        projectLink2 = xmltosqlLink2;
        projectLink2Desc = xmltosqlLink2Desc;
        projectDesc = xmltosqlDesc;
        projectTags = xmltosqlTags;
        projectImage = xmltosqlImage;
        projectImage2 = xmltosqlImage2;
    } else {
        return (
            <div className="notFound">
                <div>
                    <h2>Project Not Found</h2>
                    <a href="/mywork">Back to My Work</a>
                </div>
            </div>
        )
    }

    return (
        <motion.div 
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={transition}
            className="workDetailContainer">
            <div className="project projectDetail">
                <a href={projectLink} target="_blank" rel="noreferrer" className='mainLink'> {projectName} <span>→</span></a>
                {projectLink2 !== "" && <a target="_blank" rel="noreferrer" className="secondLink" href={projectLink2}>{projectLink2Desc}</a>}
                <div className="imageGallery">
                    <img src={projectImage} alt={projectName} />
                    <img src={projectImage2} alt={projectName} />
                    {/* <img src={projectImage3} alt={projectName} /> */}
                </div>
                <h2>{projectTags}</h2>
                <p>{projectDesc}</p>
            </div>
            <Footer />
        </motion.div>
    )
}

export default MyWork;
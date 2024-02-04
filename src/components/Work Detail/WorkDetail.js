import './WorkDetail.css'
import '../Project/Project'
import { useLocation } from 'react-router';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

// Dibs Images
import navCliImage from "../../images/NavCLI.png"
import navCliGif from "../../images/NavCLI.gif"

// Dibs Images
import dibsImage from "../../images/Dibs.png"
import dibsImage2 from "../../images/Dibs2.png"

// XML to SQL Images
import xmltosqlImage from "../../images/XMLtoSQL.png"
import xmltosqlImage2 from "../../images/XMLtoSQL2.png"

// Nav CLI Project Info
const navCliName = "Nav CLI"
const navCliLink = "https://www.npmjs.com/package/nav-cli"
const navCliLink2 = "https://github.com/parkersatterfield/nav-cli"
const navCliLink2Desc = "<See the Code />"
const navCliDesc = 'I always found navigating files from the command line cumbersome, so I designed a tool to make it better. I uploaded this project as an NPM package so users could easily download the package, and I could easily update the project without worrying about users getting the installing version.'
const navCliTags = 'Node.js, npm, Product Hunt'

// Dibs Project Info
const dibsName = "Dibs"
const dibsLink = "https://dibsfunding.com/"
const dibsDesc = 'While working at my first job out of school, I decided I wanted to pursue a startup project that my friend and I had been working on for a little while. Without knowing anything about web design, I decided to try and learn how to code and build an MVP using bubble.io. Dibs is an online social networking and seed funding platform for early stage startups.'
const dibsTags = 'Startups, Product Design, UI/UX'

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

    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

    document.body.style = `
    background-image: ""; background-color:#FAFAFA`;

    let location = useLocation().pathname;

    if (location === '/project/dibs') {
        projectName = dibsName;
        projectLink = dibsLink;
        projectDesc = dibsDesc;
        projectTags = dibsTags;
        projectImage = dibsImage;
        projectImage2 = dibsImage2;
    } else if (location === '/project/navCli') {
        projectName = navCliName;
        projectLink = navCliLink;
        projectLink2 = navCliLink2;
        projectLink2Desc = navCliLink2Desc;
        projectDesc = navCliDesc;
        projectTags = navCliTags;
        projectImage = navCliImage;
        projectImage2 = navCliGif;
    } else if (location === '/project/xmltosql') {
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
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            className="workDetailContainer">
            <div className="project projectDetail">
                <a href={projectLink} target="_blank" rel="noreferrer" className='mainLink'> {projectName} <span>→</span></a>
                {projectLink2 !== "" && <a target="_blank" rel="noreferrer" className="secondLink" href={projectLink2}>{projectLink2Desc}</a>}
                <div className="imageGallery">
                    <img src={projectImage} alt={projectName} />
                    <img src={projectImage2} alt={projectName} />
                </div>
                <h2>{projectTags}</h2>
                <p>{projectDesc}</p>
            </div>
            <Footer />
        </motion.div>
    )
}

export default MyWork;
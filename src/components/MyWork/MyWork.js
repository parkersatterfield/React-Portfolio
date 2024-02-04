import './MyWork.css'
import '../Project/Project'
import Project from '../Project/Project';
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion';

// Project Images
import navCliImage from "../../images/NavCLI.png"
import dibsImage from "../../images/Dibs.png"
import strikeImage from "../../images/Strike.png"
import xmltosqlImage from "../../images/XMLtoSQL.png"

// Nav CLI Project Info
const navCliLink = "/project/navCli"

// Dibs Project Info
const dibsLink = "/project/dibs"

// Strike Project Info
const strikeLink = "/casestudy/strike"

// XML to SQL Info
const xmltosqlLink = "/project/xmltosql"

function MyWork() {
    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

    document.body.style = `
    background-image: ""; background-color:#FAFAFA`;

    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            className="myWorkContainer">
            <div className="mainContainer">
                <div className='projectContainer'>
                    <div className="horizontalScroller">
                        <div className="projectThumbnail">
                            <Project projectLink={navCliLink} projectImage={navCliImage} />
                        </div>
                        <div className="projectThumbnail">
                            <Project projectLink={xmltosqlLink} projectImage={xmltosqlImage} />
                        </div>
                        <div className="projectThumbnail">
                            <Project projectLink={dibsLink} projectImage={dibsImage} />
                        </div>
                        <div className="projectThumbnail">
                            <Project projectLink={strikeLink} projectImage={strikeImage} />
                        </div>
                    </div>
                    <h3>Some of My Projects</h3>
                    <p>
                        I am passionate about designing and building <b>performant and attractive software products</b> that improve the lives of its users. I have multiple years of software development experience and have worked on a variety of projects ranging from <b>image processing</b> using <b>machine learning</b> to determine the mineral makeup of a rock sample, to automating free trial onboarding for a <b>SaaS</b> company by spinning up a new environment, to adding <b>semantic search</b> capabilities to a search engine.
                        <br></br>
                        <br></br>
                        But that was for work. Here are some personal projects I have worked on in my free time.
                    </p>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default MyWork;
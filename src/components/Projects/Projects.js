import './Projects.css'
import '../Project/Project'
import Project from '../Project/Project';
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion';

// Project Images
import navCliImage from "../../images/NavCLI.png"
import strikeImage from "../../images/Strike.png"
import xmltosqlImage from "../../images/XMLtoSQL.png"

// Nav CLI Project Info
const navCliLink = "/project/navCli"

// Strike Project Info
const strikeLink = "/casestudy/strike"

// XML to SQL Info
const xmltosqlLink = "/project/xmltosql"

const fieldsterProjectDescription = "This automation spins up a new environment for the trial customer with their own database to allow customers to import their own data and use the free trial as if they were a customer. It integrates with the sales pipeline to improve conversion."

const holdingsIqProjectDescription = "One way to leverages their vast databases is to provide APIs that customers can use to manage their data and implement their own solutions. Many of these endpoints are driven by services that my team and I manage."

function Projects() {
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
                    <h1>For Work.</h1>
                    <p>
                        I am passionate about designing and building <b>performant and attractive software products</b> that improve the lives of its users. I have multiple years of software development experience and have worked on a variety of projects ranging from <b>image processing</b> using <b>machine learning</b> to determine the mineral makeup of a rock sample, to automating free trial onboarding for a <b>SaaS</b> company by spinning up a new environment, to adding <b>semantic search</b> capabilities to a search engine.
                    </p>
                    <div className='workProjects'>
                        <div className='workProjectCard'>
                            <div className='workProjectHeader'>
                                <h3>Free Trial Automation</h3>
                                <a href='https://trial.key7app.com/' target='_blank' rel='noreferrer'>Go →</a>
                            </div>
                            <h5>Fieldster | 2020-2021</h5>
                            <p>{fieldsterProjectDescription}</p>
                        </div>
                        <div className='workProjectCard'>
                            <div className='workProjectHeader'>
                                <h3 className='workProjectHeader'>HoldingsIQ API</h3>
                                <a href='https://developer.ebsco.com/knowledge-services/holdingsiq/reference' target='_blank' rel='noreferrer'>Go →</a>
                            </div>
                            <h5>EBSCO | 2022-Present</h5>
                            <p>{holdingsIqProjectDescription}</p>
                        </div>
                    </div>
                    <h1>Just Because.</h1>
                    <p>Here are some projects I did in my free time. For a full list, check out my <a href="https://github.com/parkersatterfield" target='_blank' rel='noreferrer'>GitHub</a>.</p>
                    <div className="horizontalScroller">
                        <div className="projectThumbnail">
                            <Project projectLink={navCliLink} projectImage={navCliImage} />
                        </div>
                        <div className="projectThumbnail">
                            <Project projectLink={xmltosqlLink} projectImage={xmltosqlImage} />
                        </div>
                        <div className="projectThumbnail">
                            <Project projectLink={strikeLink} projectImage={strikeImage} />
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </motion.div >
    )
}

export default Projects;
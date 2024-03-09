import './Projects.css'
import '../Project/Project'
import Project from '../Project/Project';
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion';

// Thumbnails
import ebscoThumbnail from '../../images/EBSCOThumb.png';
import fieldsterThumbNail from '../../images/FieldsterThumb.png';
import navThumbNail from '../../images/NavThumb.png';
import xmlToSqlThumbNail from '../../images/XMLtoSQLThumb.png';
import strikeThumbNail from '../../images/StrikeThumb.png';

// Project Links
const navCliLink = "/project/navCli"
const strikeLink = "/casestudy/strike"
const xmltosqlLink = "/project/xmltosql"

const fieldsterProjectDescription = "This automation spins up a new environment for the trial customer with their own database to allow customers to import their own data and use the free trial as if they were a customer. It integrates with the sales pipeline to improve conversion."

const holdingsIqProjectDescription = "One way to leverages their vast databases is to provide APIs that customers can use to manage their data and implement their own solutions. Many of these endpoints are driven by services that my team and I manage."

function Projects() {
    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }

    document.body.style = `background-image: ""; background-color:#FAFAFA`;

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
                        I am passionate about designing and building <b>performant and attractive software products</b> that improve the lives of their users. Through my years of software development, I have been fortunate to work on a lot of cool projects ranging from simple <b>APIs</b> to <b>search engines</b> to <b>machine learning</b>.
                    </p>
                    <div className='workProjects'>
                        <Project
                            projectName='Free Trial Automation'
                            projectThumbnail={fieldsterThumbNail}
                            projectLink='https://trial.key7app.com/'
                            projectOwner='Fieldster'
                            projectTime='2021'
                            projectDescription={fieldsterProjectDescription}
                        />
                        <Project
                            projectName='HoldingsIQ API'
                            projectThumbnail={ebscoThumbnail}
                            projectLink='https://developer.ebsco.com/knowledge-services/holdingsiq/reference'
                            projectOwner='EBSCO'
                            projectTime='2022-Present'
                            projectDescription={holdingsIqProjectDescription}
                        />
                    </div>
                    <h1>Just Because.</h1>
                    <p>Here are some projects I did in my free time. For a full list, check out my <a href="https://github.com/parkersatterfield" target='_blank' rel='noreferrer'>GitHub</a>.</p>
                    <div className='personalProjects'>
                        <Project
                            projectName='Nav-CLI'
                            projectThumbnail={navThumbNail}
                            projectLink={navCliLink}
                            projectOwner='Parker Satterfield'
                            projectTime='2021'
                            projectDescription='Developer tool to improve file system navigation through the command line.'
                        />
                        <Project
                            projectName='XML to SQL'
                            projectThumbnail={xmlToSqlThumbNail}
                            projectLink={xmltosqlLink}
                            projectOwner='Parker Satterfield'
                            projectTime='2021'
                            projectDescription='Data transformation tool to safely and freely export XML files into SQL tables.'
                        />
                        <Project
                            projectName='Strike'
                            projectThumbnail={strikeThumbNail}
                            projectLink={strikeLink}
                            projectOwner='Parker Satterfield'
                            projectTime='2022'
                            projectDescription='Product concept for a social media golfing mobile app.'
                        />
                    </div>
                </div>
            </div >
            <Footer />
        </motion.div >
    )
}

export default Projects;
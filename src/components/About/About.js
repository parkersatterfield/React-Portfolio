import './About.css';
import { Carousel } from 'bootstrap';
import blob from './blob.svg'
import selfPortrait from '../../images/headshot.jpg';
import {motion} from 'framer-motion';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import MoreAbout from '../MoreAbout/MoreAbout'
import { useState, useEffect } from 'react';
import { useAnimation, AnimatePresence } from 'framer-motion';
import {Link as ScrollLink, AnimateScroll as scroll} from 'react-scroll';


function Home() {


    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    document.body.style = `
        background-image: url(${blob}); 
        background-repeat: no-repeat;
        background-position: right -250px  top 120%;
        background-size: 120vh;
        transition: ease-in-out 0.5s;
    `;

    // const [scrollPosition, setScrollPosition] = useState((0,0));

    // useEffect(() => {
    //     window.scrollTo(0, 850)
    // }, [scrollPosition])

    const scrollDown = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0"
        },
        exit: {
            y: "-100vh",
            opacity: 0
        }
    }

    return (
        <motion.div 
            className="bio"
            exit={{opacity: 0}}
            variants={scrollDown}
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={transition}>
            <div className="aboutmemain">
                <h4>Parker Satterfield </h4>
                <h5>Founder, Dibs</h5>
                <div className="bioContainer">
                    <img src={selfPortrait} alt="Headshot" />
                    <p>I graduated from Auburn University in 2019 with a degree in biological systems engineering
                    and a minor in business. After a short stent as an engineering consultant at a firm in Atlanta, I left
                    to start my own company, Dibs. Dibs is a social media and seed funding platform for early stage
                    startup companies to share their experiences, network, and raise money. Working on Dibs is where I was first
                    exposed to web development, and I've been learning ever since. I am currently seeking a position as a junior engineer, so I can hone my skills and work on some cool projects. </p>  
                </div>
                <ScrollLink to="moreAbout" spy={true} smooth={true}>
                    <div className= "seemore">
                        <p>See More!</p>
                        <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" className="arrow"/>
                    </div>
                </ScrollLink>
            </div>
            <div id="moreAbout">
                <MoreAbout />
            </div>
        </motion.div>
    )
}

export default Home;

import './Nav.css'
import resume from './Web Dev Resume.pdf'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import {motion} from 'framer-motion';

function Nav() {
    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    let location = useLocation().pathname

    return (

        <motion.div 
            className = 'nav'
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={transition}>
            <div 
            className="navContainer">
                <Link
                    className={(location === '/') ? 'active' : ''}
                    to={"/"}
                    >
                    Home
                </Link>

                <Link
                     className={(location === '/about') ? 'active' : ''}
                    to={"/about"}
                    >
                    About
                </Link>

                <Link
                    className={(location === '/mywork') ? 'active' : ''}
                    to={"/mywork"}
                    >
                    My Work
                </Link>

                <Link
                    className={(location === '/contact') ? 'active' : ''}
                    to={"/contact"}
                    >
                    Contact
                </Link>
                
                <a href={resume} target="_blank" rel="noreferrer">Resume</a>
            </div>

        </motion.div>
    )
}

export default Nav;
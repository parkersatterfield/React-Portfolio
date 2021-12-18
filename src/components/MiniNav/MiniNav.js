import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import resume from '../Nav/Resume.pdf'
import './MiniNav.css'
import { useState } from 'react'
import x from './x.svg'
import {motion} from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function MiniNav () {
    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    let location = useLocation().pathname;

    const [navVisibility, setNavVisibility] = useState(false);

    const showNav = {
        hidden: {
            y:"-100vh"
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 2.0,
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            y:"-100vh"
        }
    }

    return(
        <AnimatePresence
            initial={true}
            exitBeforeEnter={true}>
            <motion.div 
                variants= {showNav}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="miniNavContainer">
                <div className="miniNavHeader">
                    <motion.img 
                        exit={{rotate: 360}}
                        initial={{rotate: 0}}
                        animate={{ rotate: 360 }}
                        transition={transition}
                        src={x} alt="x" 
                        onClick={()=> setNavVisibility(false)}/>
                </div>
                <div className="miniLinkContainer">
                    <Link
                        className={(location === '/') ? 'miniNavActive' : 'miniNavLink'}
                        to={"/"}
                        >
                        Home
                    </Link>

                    <Link
                        className={(location === '/about') ? 'miniNavActive' : 'miniNavLink'}
                        to={"/about"}
                        >
                        About
                    </Link>

                    <Link
                        className={(location === '/mywork') ? 'miniNavActive' : 'miniNavLink'}
                        to={"/mywork"}
                        >
                        My Work
                    </Link>

                    <Link
                        className={(location === '/contact') ? 'miniNavActive' : 'miniNavLink'}
                        to={"/contact"}
                        >
                        Contact
                    </Link>
                    
                    <a className="miniNavLink" href={resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default MiniNav;
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import resume from '../Nav/Web Dev Resume.pdf'
import './MiniNav.css'

function MiniNav () {

    let location = useLocation().pathname;

    
    return(
        <div className="miniNavContainer">
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
    )
}

export default MiniNav;
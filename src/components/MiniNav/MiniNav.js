import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import resume from '../Nav/Web Dev Resume.pdf'
import './MiniNav.css'
import { useState } from 'react'
import x from './x.svg'

function MiniNav () {

    let location = useLocation().pathname;

    const [navVisibility, setNavVisibility] = useState(false);

    return(
        <div className="miniNavContainer">
            <div className="miniNavHeader">
                <img src={x} alt="x" onClick={()=> setNavVisibility(false)}/>
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
        </div>
    )
}

export default MiniNav;
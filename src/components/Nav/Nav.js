import './Nav.css'
import resume from './Web Dev Resume.pdf'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

function Nav() {
    let location = useLocation().pathname

    return (

        <div className = 'nav'>
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

        </div>
    )
}

export default Nav;
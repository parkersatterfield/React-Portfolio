import './Nav.css'
import resume from './Web Dev Resume.pdf'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <div className = 'nav'>
            <Link
                className="link"
                to={"/"}
                >
                Home
            </Link>

            <Link
                className="link"
                to={"/about"}
                >
                About
            </Link>

            <Link
                className="link"
                to={"/mywork"}
                >
                My Work
            </Link>

            <Link
                className="link"
                to={"/contact"}
                >
                Contact
            </Link>

            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
        </div>
    )
}

export default Nav;
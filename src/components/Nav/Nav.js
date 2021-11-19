import './Nav.css'
import resume from './Web Dev Resume.pdf'

function Nav() {
    return (
        <div>
            <div className = 'nav'>
                <a href="#aboutme">About Me</a>
                <a href="#mywork">My Work</a>
                <a href="#contact">Contact</a>
                <a href={resume} target="_blank">Resume</a>
            </div>
            <div className="hero">
                <h1>Parker Satterfield</h1>
                <h4>Engineer, Founder, Web Developer</h4>
            </div>
        </div>
    )
}

export default Nav;
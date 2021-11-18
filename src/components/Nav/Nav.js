import './Nav.css'

function Nav() {
    return (
        <div>
            <div className = 'nav'>
                <li><a href="#aboutme">About Me</a></li>
                <li><a href="#mywork">My Work</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="../assets/images/resume.pdf">Resume</a></li>
            </div>
                <div>
                <h1>Parker Satterfield</h1>
                <h4>Engineer, Founder, Web Developer</h4>
            </div>
        </div>
    )
}

export default Nav;
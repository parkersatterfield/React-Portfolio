import './Home.css';
import { Link } from 'react-router-dom';
import blob from './blob.svg';
import {motion} from 'framer-motion';

function Home() {
    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    document.body.style = `
        background-image: url(${blob}); 
        background-repeat: no-repeat;
        background-position: center;
        background-size: 120vh;
        transition: ease-in-out 0.5s;
    `;

    return (
        <motion.div 
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={transition}
            className = 'bg'>
            <div className="home">
                <div className="homeLeft">
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span>!</span>
                </div>
                <div className="homeRight">
                    <h2>My name is Parker. I'm an engineer, founder, and web developer based in Birmingham.</h2>
                    <div className="socials">
                        <div>
                            <a class="fa fa-github" href="https://github.com/parkersatterfield" target="_blank" rel="noreferrer"> </a>
                        </div>
                        <div>
                            <a class="fa fa-linkedin"href="https://www.linkedin.com/in/parker-satterfield-22313b160/" target="_blank" rel="noreferrer"> </a>
                        </div>
                        <div>
                            <a class="fa fa-instagram" href="https://www.instagram.com/parker_satterfield/" target="_blank" rel="noreferrer"> </a>
                        </div>
                        <div>
                            <a class="fa fa-dribbble" href="https://dribbble.com/parksatt" target="_blank" rel="noreferrer"> </a>
                        </div>
                    </div>
                    <Link to={'/mywork'} >
                        <motion.button
                            className='myWorkButton'
                            whileHover={{scale:1.06}}
                            whileTap={{scale:0.95}}>
                            See My Work →
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Home;

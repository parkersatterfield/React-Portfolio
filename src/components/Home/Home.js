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
                <h1>Welcome!</h1>
                <h4>My name is Parker. I'm an engineer, founder, and web developer based in Birmingham</h4>
                <Link to={'/mywork'} >
                    <motion.button
                        className='myWorkButton'
                        whileHover={{scale:1.06}}
                        whileTap={{scale:0.95}}>
                        See My Work 👉🏻
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Home;

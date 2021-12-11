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
    `;

    return (
        <motion.div 
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={transition}
            className = 'bg'>
            <div className="home">
                <h1>Hello and welcome</h1>
                <h4>to my portfolio page</h4>
                <Link to={'/mywork'} className='myWorkButton'>
                    See My Work!
                </Link>
            </div>
        </motion.div>
    )
}

export default Home;

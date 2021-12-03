import './Home.css';
import { Link } from 'react-router-dom';
import blob from './blob.svg'

function Home() {
    document.body.style = `
        background-image: url(${blob}); 
        background-repeat: no-repeat;
        background-position: center;
        background-size: 120vh;
    `;

    return (
        <div className = 'bg'>

            <div className="home">
                <h1>Hello and welcome</h1>
                <h4>to my portfolio page</h4>
                <Link to={'/mywork'}>
                    <button>
                        See My Work!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;

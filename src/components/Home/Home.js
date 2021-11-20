import './Home.css';
import blob from './blob.svg'

function Home() {
    return (
        <div className = 'bg' style={{ 
            backgroundImage: `url(${blob})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '90vw'
            }} >

            <div 
                className="home">
                <h1>Hello and welcome</h1>
                <h4>to my portfolio page</h4>
            </div>
        </div>
    )
}

export default Home;

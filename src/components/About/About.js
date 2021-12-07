import './About.css';
import { Carousel } from 'bootstrap';
import blob from './blob.svg'
import selfPortrait from '../../images/headshot.jpg';

function Home() {
    document.body.style = `
        background-image: url(${blob}); 
        background-repeat: no-repeat;
        background-position: left -250px  top 150%;
        background-size: 120vh;
    `;

    return (
        <div className="bio">
            <h4>About Me</h4>
            <div className="bioContainer">
                <img src={selfPortrait} alt="Headshot" />
                <p>Hi, I'm Parker. I graduated from Auburn University in 2019 with a degree in biological systems engineering
                and a minor in business. After a short stent as an engineering consultant at a firm in Atlanta, I left
                to start my own company, Dibs. Dibs is a social media and seed funding platform for early stage
                startup companies to share their experiences, network, and raise money. Working on Dibs is where I was first
                exposed to web development, and I've been learning ever since.</p>  
            </div>
        </div>
    )
}

export default Home;

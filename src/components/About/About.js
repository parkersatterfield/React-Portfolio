import './About.css';
import { Carousel } from 'bootstrap';
import blob from './blob.svg'
import selfPortrait from '../../images/headshot.jpg';

function Home() {
    document.body.style = `
        background-image: url(${blob}); 
        background-repeat: no-repeat;
        background-position: left -200px  top -150px;
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
            {/* <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    )
}

export default Home;

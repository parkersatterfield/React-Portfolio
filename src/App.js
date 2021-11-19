import './App.css';
import Header from './components/Header/Header'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'
import Bio from './components/Bio/Bio';

// Project Images
import cmsImage from "./images/CMS.png"
import reloc8Image from "./images/Reloc8.png"
import weatherImage from "./images/Weather.png"


// Reloc8 Project Info
const reloc8Name = "Reloc8"
const reloc8Link = "https://parkersatterfield.github.io/Project-1/"

// Weather App Project Info
const weatherName = "Weather App"
const weatherLink = "https://parkersatterfield.github.io/Weather-Dashboard/"

// CMS Project Info
const cmsName = "Employee Tracker CMS"
const cmsLink = "https://github.com/parkersatterfield/Employee-Tracker-CMS"

function App() {
  return (
    <div className="App">
      <Header />
      <Bio className="bio" />
      <div className="projectContainer">
        <h4>Projects</h4>
        <div className="projects">
          <div className = 'sub1'>
            <Project projectImage={reloc8Image} projectName={reloc8Name} projectLink={reloc8Link} />
          </div>
          <div className = 'main'>
            <Project projectImage={weatherImage} projectName={weatherName} projectLink={weatherLink}/>
          </div>
          <div className = 'sub2'>
            <Project projectImage={cmsImage} projectName={cmsName} projectLink={cmsLink}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

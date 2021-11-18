import './App.css';
import Header from './components/Header/Header'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'
import Bio from './components/Bio/Bio';

// Reloc8 Project Info
const reloc8Image = "../../assets/images/Reloc8.png"
const reloc8Name = "Reloc8"
const reloc8Link = "https://parkersatterfield.github.io/Project-1/"

// Weather App Project Info
const weatherImage = "./assets/images/Weather.png"
const weatherName = "Weather App"
const weatherLink = "https://parkersatterfield.github.io/Weather-Dashboard/"

// CMS Project Info
const cmsImage = "./assets/images/CMS.png"
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
          <div className = 'main'>
            <Project projectImage={reloc8Image} projectName={reloc8Name} projectLink={reloc8Link} />
          </div>
          <div className = 'sub1'>
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

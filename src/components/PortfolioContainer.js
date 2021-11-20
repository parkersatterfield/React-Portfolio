import React from 'react';
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import MyWork from './MyWork/MyWork'


import { useState } from 'react';

// Project Images
import cmsImage from "../images/CMS.png"
import reloc8Image from "../images/Reloc8.png"
import weatherImage from "../images/Weather.png"


// Reloc8 Project Info
const reloc8Name = "Reloc8"
const reloc8Link = "https://parkersatterfield.github.io/Project-1/"

// Weather App Project Info
const weatherName = "Weather App"
const weatherLink = "https://parkersatterfield.github.io/Weather-Dashboard/"

// CMS Project Info
const cmsName = "Employee Tracker CMS"
const cmsLink = "https://github.com/parkersatterfield/Employee-Tracker-CMS"

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const renderPage = (page) => {
    
    if (currentPage === 'Home') {
      // return <Home />;
      console.log(currentPage)
    }
    if (currentPage === 'Contact') {
      // return <Contact />;
      console.log(currentPage)

    }
    if (currentPage === 'MyWork') {
      return (
        <div>
          <MyWork projectLink = {reloc8Link} projectImage={reloc8Image} projectName = {reloc8Name}/>
          <MyWork projectLink = {weatherLink} projectImage={weatherImage} projectName = {weatherName}/>
          <MyWork projectLink = {cmsLink} projectImage={cmsImage} projectName = {cmsName}/>
        </div>
        console.log(currentPage)
      )
    }


  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
}

export default PortfolioContainer;

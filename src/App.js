import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import MyWork from './components/MyWork/MyWork'
import About from './components/About/About'

function App() {
  return (
    <Router>
      <div>
        <div className="main">
          <Nav className="nav"/> 
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/mywork" element={<MyWork />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App;

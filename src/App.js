import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

// Components
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import MyWork from './components/MyWork/MyWork'
import About from './components/About/About'
import WorkDetail from './components/Work Detail/WorkDetail'
import {motion} from 'framer-motion'

function App() {

  return (
      <Router basename = "/">
        <div>
          <AnimatePresence initial={true} exitBeforeEnter={true}>
            <motion.div 
              className="main"
              exit={{opacity: 0}}
              initial={{opacity: 0}}
              animate={{ opacity: 1 }}
              >
              <Nav className="nav"/>
            </motion.div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/mywork" element={<MyWork />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/project/*" element={<WorkDetail />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
  )
}

export default App;

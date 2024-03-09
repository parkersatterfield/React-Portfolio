import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import WorkDetail from './components/Work Detail/WorkDetail'
import CaseStudy from './components/Case Study/CaseStudy'
import { motion } from 'framer-motion'

function App() {

  return (
    <Router basename="/">
      <div>
        <AnimatePresence initial={true} exitBeforeEnter={true}>
          <motion.div
            className="main"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Nav className="nav" />
          </motion.div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/project/*" element={<WorkDetail />} />
            <Route exact path="/casestudy/*" element={<CaseStudy />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App;

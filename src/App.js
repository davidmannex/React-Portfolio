import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import MyResume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/resume" element={<MyResume />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

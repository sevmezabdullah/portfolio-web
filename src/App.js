import React from 'react';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import Skills from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => (
  <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;

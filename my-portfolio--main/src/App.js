import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Intro from './Components/Intro/intro';
import Project from './Components/Project/project';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer'
import Timeline from './Components/Timeline/timeline'
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background : darkMode? 'black': '',
    color:darkMode? 'white': ''}
    }
    >
      <Navbar />
      <Intro />
      {/* <Edu /> */}
      <Skills/>
      <Timeline/>
     
      <Project />
      <Contact />
      <Footer/>



    </div>
  );
}

export default App;

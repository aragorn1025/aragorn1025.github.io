import React from 'react';

import aboutProps from '../../assets/data/About.json';
import homeProps from '../../assets/data/Home.json';

import './Main.css';
import About from './about/About';
import Contact from './contact/Contact';
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';
import Skills from './skills/Skills';

function Main() {
  return (
    <main className="bg-dark bg-opacity-50 text-dark text-opacity-50">
      <Home {...homeProps} />
      <About {...aboutProps} />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default Main;

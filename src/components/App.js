import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Nav/>
    </div>
  );
}

export default App;

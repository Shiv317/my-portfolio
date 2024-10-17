import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Ensure Hero is imported here
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contact';
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Fixed position background */}
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-900"></div>
      {/* Main content area */}
      <div className="relative min-h-screen w-full">
        {/* Background with fuchsia blur effect */}
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>

        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero /> {/* Ensure Hero is properly added here */}
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default App;

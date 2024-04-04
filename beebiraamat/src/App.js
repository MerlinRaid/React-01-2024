import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Demo from './components/Demo';
import Kinkekaart from './components/Kinkekaart';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Kinkekaart />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Demo from './components/Demo';
import Kinkekaart from './components/Kinkekaart';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Hinnad from './components/Hinnad';
import KinkekaartiOst from './components/KinkekaartiOst';



function App() {
  return (
    <div>
           <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Kinkekaart />
      <Hinnad />
      <Footer />

      <Routes>
        <Route path='/hinnad' element={ <Hinnad /> } />
        <Route path='/kinkekaartiOst' element={ <KinkekaartiOst /> } />

      </Routes>
    </div>
  );
}

export default App;

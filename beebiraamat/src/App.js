import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Demo from './components/Demo';
import Kinkekaart from './components/Kinkekaart';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import KinkekaartiOst from './components/KinkekaartiOst';
import Hinnad from './components/Hinnad';
import Login from './components/Login';
import Register from './components/Register';



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

      <Routes>
        <Route path='/hinnad' element={ <Hinnad /> } />
        <Route path='/kinkekaartiOst' element={ <KinkekaartiOst /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/regitser' element={ <Register /> } />

      </Routes>
    </div>
  );
}

export default App;

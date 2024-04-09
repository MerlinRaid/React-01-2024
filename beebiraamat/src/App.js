import React from 'react'
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import KinkekaartiOst from './components/KinkekaartiOst';
import Hinnad from './components/Hinnad';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';



function App() {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path='/hinnad' element={ <Hinnad /> } />
        <Route path='/kinkekaartiOst' element={ <KinkekaartiOst /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/regitser' element={ <Register /> } />
        <Route path='/' element={ <Homepage /> } />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

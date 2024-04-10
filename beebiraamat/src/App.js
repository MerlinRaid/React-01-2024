import React from 'react'
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import KinkekaartiOst from './components/KinkekaartiOst';
import Hinnad from './components/Hinnad';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import Kujundamine from './components/SisseLogitud/Kujundamine';
import Konto from './components/SisseLogitud/Konto';



function App() {
  const currentUser = true;
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path='/hinnad' element={ <Hinnad /> } />
        <Route path='/kinkekaartiOst' element={ <KinkekaartiOst /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/regitser' element={ <Register /> } />
        <Route path='/' element={ <Homepage /> } />
        <Route path='/kujundamine' element={currentUser ? <Kujundamine /> : <Login />}></Route>
        <Route path='/konto' element={currentUser ? <Konto /> : <Login />}></Route>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

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
import LapseAndmed from './components/SisseLogitud/LapseAndmed';
import SinuRaamatud from './components/SisseLogitud/Konto/SinuRaamatud';
import Arved from './components/SisseLogitud/Konto/Arved';
import SinuKonto from './components/SisseLogitud/Konto/SinuKonto';



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
        <Route path='/lapseandmed' element={currentUser ? <LapseAndmed /> : <Login />}></Route>
        <Route path='/sinuraamatud' element={currentUser ? <SinuRaamatud /> : <Login />}></Route>
        <Route path='/arved' element={currentUser ? <Arved /> : <Login />}></Route>
        <Route path='/sinukonto' element={currentUser ? <SinuKonto /> : <Login />}></Route>
        
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

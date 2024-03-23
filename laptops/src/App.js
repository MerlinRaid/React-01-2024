import './App.css';
import {  Route, Routes } from 'react-router-dom'
import Avaleht from './Pages/Avaleht';
import VaataArvuteid from './Pages/VaataArvuteid';
import LisaArvuti from './Pages/LisaArvuti';
import Navbar from './components/Navbar';
import LisaArvutiUus from './Pages/LisaArvutidUus';
import Ostukorv from './Pages/Ostukorv';
import Tooted from './Pages/Tooted';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="" exact element={ <Avaleht />}/>
        <Route path="all" exact element={<VaataArvuteid />}/>
        <Route path="add" exact element={<LisaArvuti />} />   
        <Route path="new" exact element={<LisaArvutiUus />} /> 
        <Route path="cart" exact element={<Ostukorv />} />   
        <Route path="products" exact element={<Tooted />} />        
      </Routes>
    </div>
  );
}

export default App;

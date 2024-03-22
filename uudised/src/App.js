
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPostitused from './pages/KasutajaPostitused';

function App() {
  return (
    <div >

     <Link to= "/">
      <button className="nupp" >Avalehele</button>
    </Link>
    <Link to= "/uudised">
      <button className="nupp">Uudised</button>
    </Link>
    <Link to= "/kontakt">
      <button className="nupp" >Võta meiega ühendust</button>
    </Link>
      <Link to= "/meist">
      <button className="nupp" >Meist</button>
      </Link>

      <Link to= "/lisa-uudis">
      <button className="nupp" >Lisa uudis</button>
      </Link>

      <Link to= "/halda">
      <button className="nupp" >Halda uudiseid</button>
      </Link>

      


      <Routes>
        <Route path='' element={ <Avaleht/> } />
        <Route path= 'uudised' element={ <Uudised/> } />
        <Route path='kontakt' element= { <Kontakt/> } />
        <Route path='meist' element={<Meist/>} />
        <Route path='lisa-uudis' element={<LisaUudis/>} />
        <Route path='halda' element={<HaldaUudiseid/>} />
        <Route path='yks-uudis/:index'element={<YksUudis/>} />
        <Route path='muuda-uudis/:index'element={<MuudaUudis/>} />
        <Route path='kasutaja-postitused/:kasutajaId'element={<KasutajaPostitused/>} />
      </Routes> 
    </div>
  );
}

export default App;

import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import ArvuMuutmine from './pages/ArvuMuutmine';
import NuppudeLoendHarjutus from './pages/NuppudeLoendHarjutus';
import SisselogimiseNuppHarjutus from './pages/SisselogimiseNuppHarjutus';
import TekstivaljaHarjutus from './pages/TekstivaljaHarjutus';
import VärviMuutmiseHarjutus from './pages/VärviMuutmiseHarjutus';

function App() {
  return (
    <div>
      <Link to="ArvuMuutmine">
        <button>Arvu Muutmine</button>
      </Link>

      <Link to="NuppudeLoendHarjutus">
        <button>Nuppude Loend</button>
      </Link>

      <Link to="SisselogimiseNuppHarjutus">
        <button>Sisselogimise Nupp</button>
      </Link>

      <Link to="TesktivaljaHarjutus">
        <button>Tekstivalja Harjutus</button>
      </Link>

      <Link to="VärviMuutmiseHarjutus">
        <button>Värvi Muutmine</button>
      </Link>

      <Routes>
        <Route path= "ArvuMuutmine" element={ <ArvuMuutmine /> } />
        <Route path= "NuppudeLoendHarjutus" element={ <NuppudeLoendHarjutus /> } />
        <Route path= "SisselogimiseNuppHarjutus" element={ <SisselogimiseNuppHarjutus /> } />
        <Route path= "TesktivaljaHarjutus" element={ <TekstivaljaHarjutus /> } />
        <Route path= "VärviMuutmiseHarjutus" element={ <VärviMuutmiseHarjutus /> } />
      </Routes>
    </div>
  );
}

export default App;

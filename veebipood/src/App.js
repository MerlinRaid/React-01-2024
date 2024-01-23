//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';


function App() {
  return (
    <div className="App">

      <Link to="avaleht">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" className="pilt" alt="Logo" />
      </Link>

      <Link to="esindused">
        <img src="/esindused.svg" alt="" />
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="arikliendile">
        <img src="ariklient.svg" alt="" />
        <span>Ärikliendile</span>
      </Link>

      <Link to="osta-kinkekaart">
        <img src="kinkekaart.svg" alt="" />
        <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="Lisa-Toode">
        <button className="nupp">Lisa Toode</button>
      </Link>

      <Link to="Ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="Seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path= "avaleht" element={ <Avaleht /> } />
        <Route path= "esindused" element={ <Esindused /> } />
        <Route path= "arikliendile" element={ <Ariklient /> } />
        <Route path= "osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path= "Ostukorv" element={ <Ostukorv /> } />
        <Route path= "Seaded" element={ <Seaded /> } />
        <Route path="Lisa-toode" element={ <LisaToode />} />
      </Routes>
    </div>
    // Run-time vs compile-time errors 
    // Kompileerimise (kokkupakkimise) erroreid näen seal kus panin "npm start" ja brauser on üleni punane
    // Brauseris käimapanemise erroreid ei näe terminalis, näen lehel valget pilti ja errorit ennast näen:
    //   parem klõps -> inspect -> console
  );
}

export default App;

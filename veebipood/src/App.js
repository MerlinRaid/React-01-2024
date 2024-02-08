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
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">

      <div className="nav">
        <Link to="/avaleht">
          <img src="/logo.png" className="pilt" alt="Logo" />
        </Link>
  {/* arendaja vaates converditakse <Link to="esindused">  :  <a href="esindused"> */}
        <div>
          <Link  className="navlink" to="/esindused">
            <img src="/esindused.svg" alt="" />
            <span>Esindused</span>
          </Link>

          <Link className="navlink"  to="/arikliendile">
            <img src="/ariklient.svg" alt="" />
            <span>Ärikliendile</span>
          </Link>

          <Link className="navlink"  to="/osta-kinkekaart">
            <img src="/kinkekaart.svg" alt="" />
            <span >Kinkekaart</span>
          </Link>

          <Link className="navlink"  to="/Lisa-Toode">
            <span>Lisa Toode</span>
          </Link>

          <Link className="navlink"  to="/Ostukorv">
          <img src="/shopping.svg" alt="" />
            <span>Ostukorv</span>
          </Link>

          <Link className="navlink"  to="/Seaded">
            <span>Seaded</span>
          </Link>
        </div>
        <div> </div>
      </div>

      <Routes>
        <Route path= "avaleht" element={ <Avaleht /> } />
        <Route path= "esindused" element={ <Esindused /> } />
        <Route path= "arikliendile" element={ <Ariklient /> } />
        <Route path= "osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path= "Ostukorv" element={ <Ostukorv /> } />
        <Route path= "Seaded" element={ <Seaded /> } />
        <Route path="Lisa-toode" element={ <LisaToode />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
      
    </div>
    // Run-time vs compile-time errors 
    // Kompileerimise (kokkupakkimise) erroreid näen seal kus panin "npm start" ja brauser on üleni punane
    // Brauseris käimapanemise erroreid ei näe terminalis, näen lehel valget pilti ja errorit ennast näen:
    //   parem klõps -> inspect -> console
  );
}

export default App;

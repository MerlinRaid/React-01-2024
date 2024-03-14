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
import { useState } from 'react';
import Tootajad from './pages/Tootajad';
import Hinnad from './pages/Hinnad';
import Tooted from './pages/Tooted';
import HaldaTooted from './pages/HaldaTooted';
import LisaHind from './pages/LisaHind';
import LisaTootaja from './pages/LisaTootaja';
import LisaEsindus from './pages/LisaEsindus';
import HaldaTootajad from './pages/HaldaTootajad';
import HaldaEsindused from './pages/HaldaEsindused';
import HaldaHindu from './pages/HaldaHindu';
import YksToode from './pages/YksToode';
import YksEsindus from './pages/YksEsindus';
import YksTootaja from './pages/YksTootaja';
import YksHind from './pages/YksHind';
import MuudaEsindus from './pages/MuudaEsindus';
import MuudaTootaja from './pages/MuudaTootaja';
import MuudaHind from './pages/MuudaHind';
import MuudaToode from './pages/MuudaToode';
import Menyy from './components/Menyy';
import { ContactUs } from './pages/ContactUs';


function App() {                        //ture või false
  const [tume, uuendaTume] = useState(localStorage.getItem("onTume") === "jah")

const tumedaks = () => {
uuendaTume(true);
localStorage.setItem ("onTume", "jah");
// console.log()  logi konsooli
// localStorage.setItem  pane lokaalmällu
}

const heledaks = () => {
  uuendaTume(false);
  localStorage.setItem ("onTume", "ei");
}

  return (
    <div className={tume === true ? "App-dark" : "App"}>
      
      <div className="nav">
      
        <Link to="/avaleht">
          <img src="/logo.png" className="pilt" alt="Logo" />
        </Link>
  
          <div>
            <Menyy />
          </div>
        <div> 
          <button onClick={tumedaks}>Tume</button>
          <button onClick={heledaks}>Hele</button>
        </div>
      </div>

      <Routes>
        <Route path= "avaleht" element={ <Avaleht /> } />
        <Route path="kontakteeru" element={ <ContactUs />} />
        <Route path= "esindused" element={ <Esindused /> } />
        <Route path= "arikliendile" element={ <Ariklient /> } />
        <Route path= "osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path= "Ostukorv" element={ <Ostukorv /> } />
        <Route path= "Seaded" element={ <Seaded /> } />
        <Route path="Lisa-toode" element={ <LisaToode />} />
        <Route path="Tootajad" element={ <Tootajad />} />
        <Route path="Hinnad" element={ <Hinnad />} />
        <Route path="Tooted" element={ <Tooted />} />
        <Route path="HaldaTooted" element={ <HaldaTooted/>} />
        <Route path="Lisa-Hind" element={ <LisaHind/>} />
        <Route path="Lisa-Tootaja" element={ <LisaTootaja/>} />
        <Route path="Lisa-Esindus" element={ <LisaEsindus/>} />
        <Route path="HaldaTootajad" element={ <HaldaTootajad/>} />
        <Route path="HaldaEsindused" element={ <HaldaEsindused/>} />
        <Route path="HaldaHindu" element={ <HaldaHindu/>} />
        <Route path="Toode/:index" element={ <YksToode/>} />
        <Route path="Esindus/:index" element={ <YksEsindus/>} />
        <Route path="Tootaja/:index" element={ <YksTootaja/>} />
        <Route path="Hind/:index" element={ <YksHind/>} />
        <Route path="Muuda-Esindus/:index" element={ <MuudaEsindus/>} />
        <Route path="Muuda-Tootaja/:index" element={ <MuudaTootaja/>} />
        <Route path="Muuda-Hind/:index" element={ <MuudaHind/>} />
        <Route path="Muuda-Toode/:index" element={ <MuudaToode/>} />
        
        
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

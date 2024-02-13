import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import { useRef} from 'react';
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [sisselogitud, muudaSisseLogitud] = useState("ei");
  const [sonum,muudaSonum] = useState ("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
      if (paroolRef.current.value.length < 8){
        toast.error("Parool on liiga lühike");
    return;
       }

       if (paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
        toast.error("Prool peab sisaldama vähemalt ühte suurt tähte!");
        return; 
      } 

      if (paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
        toast.error("Prool peab sisaldama vähemalt ühte väikest tähte!");
        return; 
      } 

      if (paroolRef.current.value.includes("%") === false) {
        toast.error("Prool peab sisaldama % !");
        return; 
      } 


      muudaSisseLogitud("jah");
      toast.success(kasutajaNimiRef.current.value + ",Oled sisse logitud");
      }
    
  const logivalja =() => {
    muudaSisseLogitud ("ei");
    toast.success("Oled välja logitud!");
    
  }

  return (
    <div className="App">
      <div>{sonum}</div>
      { sisselogitud === "ei" && <div>
      <label>Kasutajanimi</label> <br />
      <input type="text" ref={kasutajaNimiRef} /> <br />
      <label>Parool</label> <br />
      <input type="password" ref={paroolRef} /> <br />
      </div>}


      { sisselogitud === "ei" &&  <button onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === "jah" && <button onClick={logivalja}>Logi välja</button>} <br /><br />

      <Link to="/">
            <button>Avaleht</button>
      </Link>

      <Link to="kontakt">
      <button>Kontakt</button>
      </Link>

      <Link to="meist">
        <button>Meist</button>
      </Link>

      <Link to="seaded">
        <button>Seaded</button>
      </Link>

      <Link to="leht">
        <button>Leht</button>
      </Link>

      <Link to="loader">
        <button>Loader</button>
      </Link>

        

        
  
  <Routes>
  <Route path='' element= { <Avaleht />}/>
  <Route path='kontakt' element= { <Kontakt /> } />
  <Route path='meist' element= { <Meist /> } />
  <Route path='seaded' element= { <Seaded /> } />
  <Route path='leht' element= { <Leht /> } />
  <Route path='loader' element= { <Loader /> } />
  </Routes>

  <ToastContainer
  position="top-right"
  autoClose={5000}
  theme="dark"
  />
</div>
    
  );
}

export default App;

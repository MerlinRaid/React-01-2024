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
import Logimiseks from './pages/Logimiseks';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';

function App() {
  const [sisselogitud, muudaSisseLogitud] = useState(false);
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


      muudaSisseLogitud(true);
      muudaSonum (kasutajaNimiRef.current.value + ",Oled sisse logitud");
      }
    
  const logivalja =() => {
    muudaSisseLogitud (false);
    toast.success("Oled välja logitud!");
    
  }

  return (
    <div className="App">
      <div>{sonum}</div>
      { sisselogitud === false && <div>
      <label>Kasutajanimi</label> <br />
      <input type="text" ref={kasutajaNimiRef} /> <br />
      <label>Parool</label> <br />
      <input type="password" ref={paroolRef} /> <br />
      </div>}


      { sisselogitud === false &&  <button onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === true && <button onClick={logivalja}>Logi välja</button>} <br /><br />

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

      <Link to="logimiseks">
        <button>Logimiseks</button>
      </Link>

      <Link to="books">
        <button>Books</button>
      </Link>

      <Link to="numbrid">
        <button>Numbrid</button>
      </Link>

        

        
  
  <Routes>
  <Route path='' element= { <Avaleht />}/>
  <Route path='kontakt' element= { <Kontakt /> } />
  <Route path='meist' element= { <Meist /> } />
  <Route path='seaded' element= { <Seaded /> } />
  <Route path='leht' element= { <Leht /> } />
  <Route path='loader' element= { <Loader /> } />
  <Route path='logimiseks' element= { <Logimiseks /> } />
  <Route path='books' element= { <Books /> } />
  <Route path='numbrid' element= { <Numbrid /> } />
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

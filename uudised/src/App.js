
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Uudised from './pages/Uudised';

function App() {
  return (
    <div >

     <Link to= "/">
      <button className="nupp" >Avalehele</button>
    </Link>
    <Link to= "/uudised">
      <button className="nupp">Uudsite lehele</button>
    </Link>
    <Link to= "/kontakt">
      <button className="nupp" >Võta meiega ühendust</button>
    </Link>
      <Link to= "/meist">
      <button className="nupp" >Meist</button>
      </Link>


      <Routes>
        <Route path='' element={ <Avaleht/> } />
        <Route path= 'uudised' element={ <Uudised/> } />
        <Route path='kontakt' element= { <Kontakt/> } />
        <Route path='meist' element={<Meist/>} />
      </Routes> 
    </div>
  );
}

export default App;

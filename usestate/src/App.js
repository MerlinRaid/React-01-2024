
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Ilmumine from './Pages/Ilmumine';
import Kujundus from './Pages/Kujundus';
import Muutmine from './Pages/Muutmine';
import Telefon from './Pages/Telefon';
import Hind from './Pages/Hind';

function App() {
  return (
  <div className="App">
      <Link to="/ilmumine"><button>Ilmumine</button></Link>
      <Link to="/kujundus"><button>Kujundus</button></Link>
      <Link to="/muutmine"><button>Muutmine</button></Link>
      <Link to="/telefon"><button>Telefon</button></Link>
      <Link to="/hind"><button>Hind</button></Link>
     <Routes>
     <Route path="/" element={ <Navigate to="/ilmumine" /> } />
      <Route path="/ilmumine" element={ <Ilmumine /> } />
      <Route path="/kujundus" element={ <Kujundus /> } />
      <Route path="/muutmine" element={ <Muutmine /> } />
      <Route path="/telefon" element={ <Telefon /> } />
      <Route path="/hind" element={ <Hind /> } />
     </Routes>
  </div>
  );
}

export default App;

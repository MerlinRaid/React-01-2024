
import {Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div>
      <Link to= '/'>
        <button>Avaleht</button>
      </Link>

      <Link to= '/Tagasiside'>
        <button>Tagasiside</button>
      </Link>

      <Link to= '/TagasisideAndjad'>
        <button>Tagasiside Andjad</button>
      </Link>

      
      <Link to= '/Tegevused'>
        <button>Tegevused</button>
      </Link>

      <Link to= '/Kasutajad'>
        <button>Kasutajad</button>
      </Link>
      
      <Routes>
        <Route path='/'element={ <Avaleht /> } />
        <Route path='Tagasiside'element={ <Tagasiside /> } />
        <Route path='TagasisideAndjad' element={<TagasisideAndjad />} />
        <Route path='YksikTagasisideAndja/:index' element={<YksikTagasisideAndja />} />
        <Route path='Tegevused'element={ <Tegevused /> } />
        <Route path='Kasutajad'element={ <Kasutajad /> } />
      </Routes>
    </div>
  );
}

export default App;

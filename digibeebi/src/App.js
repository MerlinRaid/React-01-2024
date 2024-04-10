import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import NavigationBar from './components/NavigationBar';
import Proov from './pages/Proov';
import Katse from './pages/Katse';

function App() {
  return (
    <div className="App">
      <Link to={'/proov'}  >
      <button>Proov</button>
      </Link>

      <Link to={'/katse'}  >
      <button>Katse</button>
      </Link>

    <NavigationBar />
    <Routes>
    <Route path= "avaleht" element={ <Avaleht /> } />
    <Route path= "/proov" element={ <Proov /> } />
    <Route path= "/katse" element={ <Katse /> } />
    </Routes>
      
    </div>
  );
}

export default App;

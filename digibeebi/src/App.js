import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import NavigationBar from './components/NavigationBar';
import Proov from './pages/Proov';

function App() {
  return (
    <div className="App">
      <Link to={'/proov'}  >
      <button>Proov</button>
      </Link>

    <NavigationBar />
    <Routes>
    <Route path= "avaleht" element={ <Avaleht /> } />
    <Route path= "/proov" element={ <Proov /> } />
    </Routes>
      
    </div>
  );
}

export default App;

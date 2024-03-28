import './App.css';
import { Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">

    <NavigationBar />
    <Routes>
    <Route path= "avaleht" element={ <Avaleht /> } />
    </Routes>
      
    </div>
  );
}

export default App;

import './App.css';
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Lisa from './pages/Lisa';
import Halda from './pages/Halda';
import Avaleht from './pages/Avaleht';

function App() {
  return (
    <div>
        <Link to="/">
            <button>Avaleht</button>
        </Link>

        <Link to="Lisa">
            <button>Lisa Jook</button>
        </Link>

        <Link to="Halda">
            <button>Halda Jooke</button>
        </Link>

        <Routes>
             <Route path= "/" element={ <Avaleht /> } />
             <Route path= "Lisa" element={ <Lisa/> } />
             <Route path= "Halda" element={ <Halda /> } />
        </Routes>


    </div>
  )
}

export default App
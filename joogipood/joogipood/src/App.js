import './App.css';
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Lisa from './pages/Lisa';
import Halda from './pages/Halda';
import Avaleht from './pages/Avaleht';
import Jook from './pages/Jook';

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
             <Route path= "Jook/:number" element={ <Jook /> } />
        </Routes>


    </div>
  )
}

export default App
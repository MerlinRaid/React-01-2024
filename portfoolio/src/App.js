
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Work  from './Pages/Work';
import Hobbies from './Pages/Hobbies';
import Courses from './Pages/Courses';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
      
       
      <Routes>
      <Route path="" element={ <Navbar />} />
        <Route path="work" element={ <Work /> } />
        <Route path="hobbies" element={ <Hobbies />} />
        <Route path="courses" element={ <Courses />} />
      </Routes>

      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/4cEKAYnxbrk?si=9c3-CjjYXGrHqtkL" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        <a className="facebook-button" href='https://www.facebook.com/'>
          <img src="/facebook-logo.png" alt="" />
          <span>Facebook</span>
        </a>

    </div>
  );
}

export default App;

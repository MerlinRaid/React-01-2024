
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work  from './Pages/Work';
import Hobbies from './Pages/Hobbies';
import Courses from './Pages/Courses';
function App() {
  return (
    <div>
      <img className="main-picture" src="https://cdn.pixabay.com/photo/2016/06/03/13/39/success-1433400_1280.jpg" alt=''/>
      <div className="rectangle" ></div>

      <div className="navigation-picture">
        <Link className="main-link" to="work">
          <img src="https://cdn-icons-png.flaticon.com/512/1256/1256397.png" alt="" />
          <p>Tööde leht</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://cdn-icons-png.flaticon.com/256/3720/3720847.png" alt="" />
          <p>Hobide leht</p>
        </Link >
        <Link className="main-link" to="courses">
          <img src="https://www.vecteezy.com/blog/wp-content/uploads/2021/08/svg-file.jpg" alt="" />
          <p>Kursuse leht</p>
        </Link>
        </div>

       
      <Routes>
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

import { Link } from "react-router-dom" ;

function Navbar() {
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
    </div>
  )
}

export default Navbar
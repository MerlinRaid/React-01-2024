import { Link } from "react-router-dom";
import "./topbar.css"
import { useState } from "react";

export default function TopBar() {
  const [user, setUser] = useState(false);

  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
             <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
             </li>
             <li className="topListItem">
             <Link className="link" to="/">ABOUT</Link>
             </li>
             <li className="topListItem">
             <Link className="link" to="/">CONTACT</Link>
             </li>
             <li className="topListItem">
             <Link className="link" to="/write">WRITE</Link>
             </li>
             <li className="topListItem"  onClick={() => setUser(false)}>
             {user && "LOGOUT"}
             </li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className="topImg" 
            src="https://cdn2.vectorstock.com/i/1000x1000/46/41/silhouette-of-a-woman-in-profile-vector-21834641.jpg"
             alt="" srcset="" />
            ) : (
            <ul className="topList" >
                <li className="topListItem">
              {/* <Link className="link" to="/login">LOGIN</Link>*/}
              <span className="link" onClick={() => setUser(true)}>LOGIN </span>
              </li> 

                <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link></li>
            </ul>
            )
          }
            

            <i className="topSearchIcon fas fa-search"></i>
        
        </div>
    </div>
  )
}

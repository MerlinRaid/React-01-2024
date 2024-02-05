import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-x-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
             <li className="topListItem">HOME</li>
             <li className="topListItem">ABOUT</li>
             <li className="topListItem">CONTACT</li>
             <li className="topListItem">WRITE</li>
             <li className="topListItem">LOGOUT</li>
             </ul>
        </div>
        <div className="topRight">
            <img className="topImg" 
            src="https://cdn2.vectorstock.com/i/1000x1000/46/41/silhouette-of-a-woman-in-profile-vector-21834641.jpg"
             alt="" srcset="" />

            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        
        </div>
    </div>
  )
}

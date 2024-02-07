import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://cdn.pixabay.com/photo/2024/01/30/21/23/desert-8542838_1280.jpg" alt="" />
    </div>
  )
}

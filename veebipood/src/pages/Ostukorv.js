import { Link } from "react-router-dom"

function Ostukorv() {
  return (
    <div>
        <div>Ostukorv on hetkel tühi.</div>
        <Link to="/Avaleht">Avaleht</Link>
        <img src="tuhi.png" className="ostukorvi-pilt" alt="" />
    </div>
  )
}

export default Ostukorv
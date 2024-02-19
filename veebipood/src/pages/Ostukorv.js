import { Link } from "react-router-dom"
import { useState } from "react"

function Ostukorv() {
const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"])

  return (
    <div>
        {ostukorv.length === 0 && <div>Ostukorv on hetkel tühi.</div>}
      
        <button onClick={() => uuendaOstukorv (["Coca", "Fanata"])}>Jäta alles Coca + Fanta</button>

      {ostukorv.length > 0 &&
      <div>
        <div>Ostukorvis on {ostukorv.length} ese(t)</div>
        <button onClick={() => uuendaOstukorv ([])}>Tühjenda</button>
      </div>}

        {ostukorv.map(toode => <div>{toode}</div> )}

       <Link to="/Avaleht">Avaleht</Link>
        {ostukorv.length === 0 && <img src="tuhi.png" className="ostukorvi-pilt" alt="" />}
    </div>
  )
}

export default Ostukorv
import { Link } from "react-router-dom"
import { useState } from "react"

function Ostukorv() {
const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

const lisaOstukorviRedBull = () => {
  ostukorv.push("Red Bull");
  uuendaOstukorv(ostukorv.slice());
}

const kustutaOstukorvist =(index) => {
 ostukorv.splice(index, 1);
 uuendaOstukorv(ostukorv.slice());
}

const lisaOstukorvi = (uusToode) => {
  ostukorv.push(uusToode);
  uuendaOstukorv(ostukorv.slice());
}

  return (
    <div>
        {ostukorv.length === 0 && <div>Ostukorv on hetkel tühi.</div>}
      
        <button onClick={() => uuendaOstukorv (["Coca", "Fanata"])}>Jäta alles Coca + Fanta</button>
        <button onClick={lisaOstukorviRedBull}>Lisa lõppu juurde Red Bull</button>

      {ostukorv.length > 0 &&
      <div>
        <div>Ostukorvis on {ostukorv.length} ese(t)</div>
        <button onClick={() => uuendaOstukorv ([])}>Tühjenda</button>
      </div>}

        {ostukorv.map((toode, index) => 
        <div>
          {index}.
          {toode} 
          <button onClick={() => kustutaOstukorvist(index)}>Kustuta</button> 
          <button onClick={() => lisaOstukorvi(toode)}>Lisa lõppu üks juurde</button> 
        </div> )}

       <Link to="/Avaleht">Avaleht</Link>
        {ostukorv.length === 0 && <img src="tuhi.png" className="ostukorvi-pilt" alt="" />}
    </div>
  )
}

export default Ostukorv
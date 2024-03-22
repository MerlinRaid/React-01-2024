import React, { useState } from 'react'

function ValitudTegelased() {
  const [tegelased, uuendaTegelased] = useState(JSON.parse(localStorage.getItem("valitudTegelane")) || []);

  const eemalda  = (index) => {
    tegelased.splice(index,1)
    uuendaTegelased(tegelased.slice());
    localStorage.setItem("valitudTegelane", JSON.stringify(tegelased));
 }

 const kustutaKoik = () => {
   uuendaTegelased([])
   localStorage.setItem("valitudTegelane", JSON.stringify([]));
 }


  return (
    <div>
      {tegelased.length > 0 &&<h3>Valitud on {tegelased.length} tegelast</h3>}
      {tegelased.length === 0 && <div>Ühtegi tegelast pole valitud! </div> } 
      {tegelased.length > 0 && <button onClick={kustutaKoik}>Kustuta kõik</button>}
      <br /><br />
        {tegelased.map ((tegelane, index) => <div key={index}>
        <div>Eesnimi: {tegelane.eesnimi}</div>
        <div>Perekonnanimi: {tegelane.perenimi}</div>
        <div>Elukoht: {tegelane.elukoht}</div>
        <div>Vanus: {tegelane.vanus}</div>
        <button onClick={() => eemalda(index)}  >Eemalda</button>
       <br /><br />
     </div> )}


     


    </div>
  )
}

export default ValitudTegelased
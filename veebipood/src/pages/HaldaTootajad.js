import React, { useState } from 'react'
import tootajadJSON from "../data/tootajad.json";
import { Link } from 'react-router-dom';



function HaldaTootajad() {
 
    const [tootajad, uuendaTootajad] = useState(tootajadJSON)


    const kustutaTootaja =(index) => {
        tootajadJSON.splice(index, 1);
        uuendaTootajad(tootajadJSON.slice());
       }
    
       const lisaTootaja = (uusTootaja) => {
        tootajad.push(uusTootaja);
        uuendaTootajad(tootajad.slice());
      }

  return (
    <div>
         {tootajad.map((tootaja, index) => 
         <div key={index}>
            <div>{tootaja.nimi}</div>
            <div>{tootaja.amet}</div>
            <div>{tootaja.email}</div>
            <div>{tootaja.vanus}</div>
            <button onClick={() => kustutaTootaja(index)}>Kustuta</button> 
            <button onClick={() => lisaTootaja(tootaja)}>Lisa lõppu juurde</button>
            <Link to={"/Muuda-Tootaja/" +index}>
              <button>Muuda</button>
            </Link>
        </div> )}
    </div>
  )
}

export default HaldaTootajad
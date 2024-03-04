import React, { useState } from 'react'
import tootajadJSON from "../data/tootajad.json";



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
            {tootaja}
            <button onClick={() => kustutaTootaja(index)}>Kustuta</button> 
            <button onClick={() => lisaTootaja(tootaja)}>Lisa lõppu juurde</button>
        </div> )}
    </div>
  )
}

export default HaldaTootajad
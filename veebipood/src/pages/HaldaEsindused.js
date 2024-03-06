import React, { useState } from 'react'
import esindusedFailist from "../data/esindused.json"

// KOJU:
// Kustutada ei saa enam vaatamise lehel. Esindused.js
// Lisada ei saa juba eelmise korra kodutöö tõttu vaatamise lehel: LisaEsindus.js
// Kustutada saab läbi HaldaEsindused.js
// Esindused.js sees imiteerime tavainimese vaadet
// LisaEsindus.js ja HaldaEsindused.js imiteerivad Administraatori vaadet

function HaldaEsindused() {
  const [keskused, uuendaKeskused] = useState(esindusedFailist);

  const kustutaTallinnaEsindus = (index) => {
    esindusedFailist.splice(index, 1);
    uuendaKeskused(esindusedFailist.slice());
   }

   const lisaTallinnaEsindus = (uusKeskus) => {
    esindusedFailist.push(uusKeskus);
     uuendaKeskused(esindusedFailist.slice());
   }
   
  return (
    <div>
       {keskused.map((keskus,index)  => 
        <div key={index}>
          {keskus}
          <button onClick={() => kustutaTallinnaEsindus(index)}>Kustuta</button>  
          <button onClick={() => lisaTallinnaEsindus(keskus)}>Lisa lõppu üks juurde</button> 
        </div>)}
    </div>
  )
}

export default HaldaEsindused
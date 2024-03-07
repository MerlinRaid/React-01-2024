import React, { useState } from 'react'
import hinnadFailist from "../data/hinnad.json"
import {Link} from 'react-router-dom'; 

function HaldaHindu() {
  const [hinnad, muudaHinnad]= useState(hinnadFailist)


  //kui siin on sulgude sisu täidetud, siis tuleb midagi onClick seest kaasa saata
const kustutaHind = (jrknr) => {
  hinnadFailist.splice(jrknr, 1); 
  muudaHinnad(hinnadFailist.slice());
}

const lisaHind= (lisatavHind) => {
  hinnadFailist.push(lisatavHind);
  muudaHinnad(hinnadFailist.slice())
}

  return (
    <div>
       {hinnad.map ((hind, jrknr) => 
          <div key={jrknr}>
            {hind} 
            <button onClick={() => kustutaHind(jrknr)}>X</button> 
            <button onClick={() => lisaHind(hind)}>Lisa</button> 
            <Link to={"/Muuda-Hind/" + jrknr}>
               <button>Muuda</button>
            </Link>
          </div> )}
    </div>
  )
}

export default HaldaHindu

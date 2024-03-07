import React, { useState } from 'react';
import tootedFailist from "../data/tooted.json";
import {Link} from 'react-router-dom'; 

function HaldaTooted() {
    const [tooted, muudaTooted] = useState (tootedFailist);

    const kustuta = (indeks) => {
        tootedFailist.splice(indeks, 1);
        muudaTooted(tootedFailist.slice());
    }

  return (
    <div>
        {tooted.map((toode, indeks) =>  
            <div key={indeks}>
              {toode}
              <button onClick={() => kustuta(indeks)}>Kustuta</button>
              <Link to={"/Muuda-Toode/" + indeks}>
                 <button>Muuda</button>
              </Link>
            </div> )}
    </div>
  )
}

export default HaldaTooted

// ["Nobe", "BMW", "Tesla"]
// "BMW" -> 1
// Kustutada saab ainult järjekorranumbriga
// Muuta saab ainult järjekorranumbriga
// Ühte leida saab järjekorranumbriga või ühe kindla omadusega.

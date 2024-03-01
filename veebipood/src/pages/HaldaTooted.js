import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json"

function HaldaTooted() {
    const [tooted, muudaTooted] = useState (tootedFailist);

    const kustuta = (indeks) => {
        tootedFailist.splice(indeks, 1);
        muudaTooted(tootedFailist.slice());
    }

  return (
    <div>
        {tooted.map((toode, indeks) =>  
            <div>
              {toode}
              <button onClick={() => kustuta(indeks)}>Kustuta</button>
              <button>Muuda</button>
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
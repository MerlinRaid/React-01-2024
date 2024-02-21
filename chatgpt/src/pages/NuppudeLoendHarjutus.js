import React, { useState } from 'react'

function NuppudeLoendHarjutus() {
    const [Loend, uuendaLoend] = useState(0)
  return (
    <div>
        <button onClick={() => uuendaLoend(Loend + 1)}>Suurenda loendit</button>
        <div>Loendi pikkus:{Loend}</div>
        
    </div>
  )
}

export default NuppudeLoendHarjutus
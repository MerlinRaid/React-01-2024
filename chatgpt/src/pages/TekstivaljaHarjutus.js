import React, { useState } from 'react'

function TekstivaljaHarjutus() {
    const [tekst, uuendaTekst] = useState()

  return (
    <div>
      <input type="text" value={tekst} onChange={(tekst) => uuendaTekst(tekst.target.value)} />
      <button onClick={() => uuendaTekst(tekst)}>Muuda teksti</button>
      <div>{tekst}</div>
    </div>
  )
}

export default TekstivaljaHarjutus
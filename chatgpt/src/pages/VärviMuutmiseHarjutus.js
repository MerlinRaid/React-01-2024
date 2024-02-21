import React, { useState } from 'react'

function VärviMuutmiseHarjutus() {
    const [tekstiVärv, muudaTekstiVärvi] = useState("black");
  return (
    <div>
      <h1 style={{ color: tekstiVärv }}>Muutuva värviga tekst</h1>
      <button onClick={() => muudaTekstiVärvi("blue")}>Muuda teksti värv siniseks</button>
      <button onClick={() => muudaTekstiVärvi("red")}>Muuda teksti värv punaseks</button>
      <button onClick={() => muudaTekstiVärvi("yellow")}>Muuda teksti värv kollaseks</button>

    </div>
  )
}

export default VärviMuutmiseHarjutus
import React, { useState } from 'react'

function SisselogimiseNuppHarjutus() {
    const [sisseLogitud, muudaLogimine] = useState(false);
  return (
    <div>
         <button onClick={() => muudaLogimine(!sisseLogitud)}>{sisseLogitud ? 'Logi välja' : 'Logi sisse'}</button>
      <p>{sisseLogitud ? "Sisse logitud" : "Välja logitud"}</p>
    </div>
  )
}

export default SisselogimiseNuppHarjutus
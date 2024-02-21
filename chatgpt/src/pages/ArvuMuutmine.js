import React, { useState } from 'react'

function ArvuMuutmine() {
    const [arv, muudaArv] = useState (1)

  return (
    <div>
        <button onClick={() => muudaArv(arv - 1)}>-</button>
        <div>{arv}</div>
        <button onClick={() => muudaArv(arv + 1)}>+</button>

    </div>
  )
}

export default ArvuMuutmine
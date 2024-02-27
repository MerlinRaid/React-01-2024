import React, { useRef, useState } from 'react'

function Tagasiside() {
    const [tagasisided, muudaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]) 
    const tagasisideRef= useRef();


    const kustutaTagasiside = (jrknr) => {
      tagasisided.splice (jrknr, 1)
      muudaTagasisided(tagasisided.slice())
    }

    const lisaTagasiside = () => {
      tagasisided.push(tagasisideRef.current.value);
      muudaTagasisided(tagasisided.slice());
    }

    
 

  return (
    <div>
        <h2>Tagasisided:</h2>
        {tagasisided.map((tagasiside, jrknr) =>
      <div>{tagasiside}
        <button onClick={() => kustutaTagasiside(tagasiside)}>Kustuta</button>
      </div> )}

      <label>Lisa uue tagasiside</label>
      <input ref={tagasisideRef} type="text" />
      <button onClick={() => lisaTagasiside()}>Sisesta</button>
    </div>
  )
}

export default Tagasiside
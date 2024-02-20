import React, { useState } from 'react'

function Tagasiside() {
    const [tagasisided, muudaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]) 
    
  return (
    <div>
        <h2>Tagasisided:</h2>
        {tagasisided.map(tagasiside => <div>{tagasiside}</div> )}
    </div>
  )
}

export default Tagasiside
import React, { useState } from 'react'
import joogidFailist from "../joogid.json"

function Halda() {
    const [joogid, uuendaJoogid] = useState(joogidFailist)
    

    const kustuta = (index) => {
        joogid.splice(index, 1)
        uuendaJoogid(joogid.slice())
    }

  return (
    <div>
        {joogid.map((jook, index) => 
        <div>
            {jook}
            <button onClick={() => kustuta(index)} >Kustuta</button>
        </div> )}

      
    </div>
  )
}

export default Halda
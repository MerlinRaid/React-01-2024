import React, { useRef } from 'react'
import hinnadFailist from "../data/hinnad.json"

function LisaHind() {
    const hindRef = useRef();

    // tee veel kontroll jurude
    const lisaInputistHind = () => {
       if(hindRef.current.value.startsWith("0")){
        //lisa veateada
        return;
       }

       hinnadFailist.push(hindRef.current.value);
       hindRef.current.value = "";
      }
  return (
    <div>
        <label>Hind</label>
        <input ref={hindRef} type="text" />
        <button onClick={lisaInputistHind}>Lisa</button>


    </div>
  )
}

export default LisaHind

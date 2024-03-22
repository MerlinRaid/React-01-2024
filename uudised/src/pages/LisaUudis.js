import React from 'react'
import { useRef, useState } from 'react'

function LisaUudis() {
    const [s6num, uuendaS6num] = useState("");
    const uudiseRef = useRef();

function lisaUusUudis () {
  let uudised = localStorage.getItem("uudised");
  uudised = JSON.parse(uudised) || [];
  uudised.push(uudiseRef.current.value);
  uudised = JSON.stringify(uudised);
  localStorage.setItem("uudised", uudised);
        
    }

    const kontroll = () => {
      uuendaS6num("")

      if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()){
        uuendaS6num("Sisestasid uudise väikesetähega, palun paranda!")
      }  
      if (uudiseRef.current.value.includes("  ")){
        uuendaS6num("Sisestasid kaks tühikut, palun paranda!")
      } 
    }

  return (
    <div>
      <div>{s6num}</div>
        <br />
        <label>Uudise nimi</label> <br />
        <input ref={uudiseRef} onChange={kontroll} type="text" /> <br />
        <button onClick={lisaUusUudis} >Lisa uudis</button> <br />

    </div>
  )
}

export default LisaUudis
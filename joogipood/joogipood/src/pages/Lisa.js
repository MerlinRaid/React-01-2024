import React, { useRef } from 'react'
import joogidFailist from "../joogid.json"

function Lisa() {
    const jookRef = useRef()

    const lisa = () => {
        joogidFailist.push(jookRef.current.value)
        jookRef.current.value = "";
    }


  return (
    <div>
          <label>Lisa jook</label>
        <input ref={jookRef} type="text" />
        <button onClick={lisa} >Lisa</button>


    </div>
  )
}

export default Lisa
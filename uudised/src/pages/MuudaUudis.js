import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'


function MuudaUudis() {
    const {index} =useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised") || []) 
    const found = uudisedLS[index];

    const inputRef = useRef();

    const muuda = () => {
     uudisedLS[index] = inputRef.current.value;
     localStorage.setItem("uudised", JSON.stringify(uudisedLS))
    }

  return (
    <div>
        <label>Uudis</label> <br />
        <input type="text" defaultValue={found} ref={inputRef} /> <br />
        <button onClick={muuda}>Muuda</button> <br />

    </div>
  )
}

export default MuudaUudis
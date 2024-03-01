import React, { useRef } from 'react'
import hinnadFailist from "../data/hinnad.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaHind() {
    const hindRef = useRef();

    // tee veel kontroll jurude
    const lisaInputistHind = () => {
      if (hindRef.current.value  === "") {
        toast.error("Hind peab olema sisestatud!");
        return; 
      } 
       if(hindRef.current.value.startsWith("0")){
        toast.error("Hind ei saa alata nulliga!")
        return;
       }

       hinnadFailist.push(hindRef.current.value);
       toast.success("Hind lisatud!");
       hindRef.current.value = "";
      }
      
  return (
    <div>
        <label>Hind</label>
        <input ref={hindRef} type="text" />
        <button onClick={lisaInputistHind}>Lisa</button>



      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        
      />

    </div>
  )
}

export default LisaHind

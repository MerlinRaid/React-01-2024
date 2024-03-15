import React, { useRef } from 'react'
import tootajadFailist from "../data/tootajad.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaTootaja() {
    const nimiRef = useRef()
    const ametRef = useRef();
    const emailRef = useRef();
    const vanusRef = useRef();

    const lisa = () => {
    if (nimiRef.current.value  === "") {
        toast.error("Nimi peab olema sisestatud!");
        return; 
      } 
  
      
      if (nimiRef.current.value.toLowerCase() === nimiRef.current.value) {
        toast.error("Nimi peab olema suure tähega!");
        return; 
      } 
  
      if (nimiRef.current.value.length < 3) {
        toast.error("Nimi peab olema vähemalt 3 tähemärki");
        return; 
      } 
  
      tootajadFailist.push( {
        "nimi": nimiRef.current.value,
        "email": emailRef.current.value, 
        "amet": ametRef.current.value,
        "vanus":Number(vanusRef.current.value) 
       }
      )
      toast.success("Töötaja lisatud");
      nimiRef.current.value = "";
      emailRef.current.value = "";
      ametRef.current.value = "";
      vanusRef.current.value = "";
    }
    

  return (
    <div>
      <label>Uue töötaja nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Uue töötaja amet</label><br />
      <input ref={ametRef} type="text" /> <br />
      <label>Uue töötaja email</label><br />
      <input ref={emailRef} type="text" /> <br />
      <label>Uue töötaja vanus</label><br />
      <input ref={vanusRef} type="number" /> <br />
      <button onClick={lisa}>Lisa</button><br />

    <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        
    />

    </div>
  )
}

export default LisaTootaja
import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const[sonum, muudaSonum] = useState ("");
  const inputiLuger = useRef (); // inputi seest kasutaja sisestuse lugemiseks
  const hindRef = useRef ();
  const piltRef = useRef ();
  const aktiivsusRef = useRef ();
  
 //function lis (){} samas mis const lisa

  const lisa = () => {
    //muudaKogus(kogus + 1)
    // hind === 20 ? "" : ""
    if (inputiLuger.current.value === "") {
      //muudaSonum("Tühja nimetusega ei saa toodet lisada!")
      toast.error("Tühja nimetusega ei saa toodet lisada!")
    } else {
      //muudaSonum("Toode lisatud: " + inputiLuger.current.value);
      toast.success("Toode lisatud: " + inputiLuger.current.value);
      tootedFailist.push({ 
        "nimi": inputiLuger.current.value,
        "hind": Number(hindRef.current.value), 
        "aktiivne": aktiivsusRef.current.checked, 
        "pilt": piltRef.current.value
      }
    );
      inputiLuger.current.value = ""; // nii kui pushin ehk lisan faili kõige lõppu juurde, siis tühjeneb lisamis kast
      //ma ei pane useState funktsiooni väljakutset
      // muuda/uuendaToode vms sp, et ei uuenda HTML'i
    }   
}

const kontrolli = () => {
  // inputiLuger.current.value.charAt(0).toLowerCase() === inputiLuger.current.value.charAt(0)
  // inputiLuger.current.value[0].toLowerCase() === inputiLuger.current.value[0]
  if (inputiLuger.current.value === ""){
    return;
  }

  if (inputiLuger.current.value[0].toLowerCase() === inputiLuger.current.value[0]) {
    muudaSonum("Väikese tähega ei saaa toodet lisada!")
  } else{
    muudaSonum("")
  }
}

  return (
    <div>
      <h1 style={{color: "red"}}>{sonum}</h1>
        {/* <form action="/action_page.php">  kui tehakse ikkagi Reacti tutorialis <form> --> 
        siis tehakse funktsioonis event.preventDefault */}
          
          <label>Toote nimetus:</label>
          <input onChange={kontrolli} type="text" ref={inputiLuger} /><br /><br />

          <label>Toote hind:</label>
          <input  type="number" ref={hindRef} /><br /><br />

          <label>Toote pilt:</label>
          <input  type="text" ref={piltRef} /><br /><br />

          <label>Toote aktiivsus:</label>
          <input  type="checkbox" ref={aktiivsusRef} /><br /><br />


          {/* <input type="submit" value="Submit" /> */}

          <button disabled={sonum !== ""} onClick={lisa}>Sisesta</button>
      
      {/* </form> */}

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        
        />
    </div>
  )
}

export default LisaToode
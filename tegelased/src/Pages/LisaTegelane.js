import { useRef, useState } from "react"

function LisaTegelane() {
  const [ sonum, uuendaSonum] = useState("");
  const nimiRef = useRef ();


  const lisaUusTegelane = () => {
    if (nimiRef.current.value === "") {
      uuendaSonum("Tühja nimega ei saa sisestada")
    } else {
      uuendaSonum("Tegelane lisatud: " + nimiRef.current.value);
    }   
}


  return (
    <div>
      <div> {sonum} </div>
      <label>Tegelase nimi</label> <br />
      <input type="text" ref={nimiRef } /><br /><br />
      <button onClick={lisaUusTegelane}>Sisesta</button>
    </div>
  )
}
export default LisaTegelane
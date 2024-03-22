import { useRef, useState } from "react"

function LisaTegelane() {
  const [ sonum, uuendaSonum] = useState("");
  const eesnimeRef = useRef();
  const perkonnaRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();


  const lisaUusTegelane = () => {
    if (eesnimeRef.current.value === "") {
      uuendaSonum("Tühja nimega ei saa sisestada")
    } else {
      uuendaSonum("Tegelane lisatud: " + eesnimeRef.current.value);
      const tegelased = JSON.parse(localStorage.getItem("tegelased")) || []
      tegelased.push({
        "eesnimi": eesnimeRef.current.value, 
        "perenimi":perkonnaRef.current.value, 
        "elukoht": elukohtRef.current.value , 
        "vanus": Number(vanusRef.current.value )
      })
      localStorage.setItem("tegelased", JSON.stringify(tegelased))
    }  
    console.log(eesnimeRef.current.value)
    console.log(perkonnaRef.current.value)
    console.log(elukohtRef.current.value)
    console.log(vanusRef.current.value) 
}


  return (
    <div>
      <div> {sonum} </div>
      <div>Lisa uus tegelane</div>
        <label>Eesnimi</label> <br />
        <input ref={eesnimeRef} type="text" /> <br />
        <label>Perkonnanimi</label> <br />
        <input ref={perkonnaRef} type="text" /> <br />
        <label>Elukoht</label> <br />
        <input ref={elukohtRef} type="text" /><br />
        <label>Vanus</label> <br />
        <input ref={vanusRef} type="number" /> <br />
      <button onClick={lisaUusTegelane}>Sisesta</button>
    </div>
  )
}
export default LisaTegelane
import { useState } from "react"
import Tutvustus from "../components/Tutvustus";
import Müük from "../components/Müük";
import Garantii from "../components/Garantii";

function Ariklient() {
  const [sektsioon, muudaSektsioon] = useState("Tutvustus");
  
  return (
    <div>
        <button onClick={ () => muudaSektsioon ("Tutvustus")}>Tutvustus</button>
        <button onClick={ () => muudaSektsioon ("Müük")}>Müügitingimused</button>
        <button onClick={ () => muudaSektsioon ("Garantii")}>Garantii tingimused</button>

        {sektsioon === "Tutvustus" && <Tutvustus />}

        {sektsioon === "Müük" && <Müük />}

        {sektsioon === "Garantii" && <Garantii />}
    </div>
  )
}

export default Ariklient
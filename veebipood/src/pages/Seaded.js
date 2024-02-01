import { useState } from "react"

function Seaded() {
  const [keel, muudaKeel] = useState("ee");

  return (
    <div>
        <div>Seaded</div>

        {keel === "ee" && <div>Leht on eesti keelne</div>}
        {keel === "ru" && <div>Cтpaницa на русском языке</div>}
        {keel === "en" && <div>The page is in English</div>}

        <button onClick={() => muudaKeel ("ee")}>Est</button>
        <button onClick={() => muudaKeel ("ru")}>Rus</button>
        <button onClick={() => muudaKeel ("en")}>Eng</button>
    </div>
  )
}

export default Seaded
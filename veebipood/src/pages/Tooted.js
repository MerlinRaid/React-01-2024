import React, { useState } from 'react'

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Nobe", "BMW", "Tesla"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

function Tooted() {
const[tooted, uuendaTooted] = useState(["Nobe", "BMW", "Tesla"])

const sorteeriAZ = () => {
  tooted.sort()
  uuendaTooted(tooted.slice())
}
  return (
    <div>
      <button onClick={sorteeriAZ} >Sorteeria A-Z</button>
      {tooted.map(toode => <div>{toode}</div> )}
      <div>Hetkel on {tooted.length} toodet. </div>
    </div>
  )
}

export default Tooted
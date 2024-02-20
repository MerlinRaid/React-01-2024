import React, { useState } from 'react'

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// [312, 1234, 56, 88,8]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

// Tühjenda nupp, mis kustub kui on .lenght väärtus 0 
// Kui pole ühtegi hinda, siis kuva <div>Pole ühtegi hinda nähtavl</div>

function Hinnad() {
const [hinnad, muudaHinnad]= useState([312, 1234, 56, 88, 8])

const sorteeriAZ =() => {
  hinnad.sort();
  muudaHinnad(hinnad.slice())
}

  return (
    <div>
    {  hinnad.length > 0 &&
      <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        {hinnad.map (hind => <div>{hind}</div> )}
        <div>Hetkel on lehel {hinnad.length} hinda. </div>
        <button onClick={() => muudaHinnad([])}>Eemalda hinnad</button>
      </div>}

      {hinnad.length === 0 && <div>Pole ühtegi hinda nähtaval!</div>}
    </div>
  )
}

export default Hinnad
import React, { useState } from 'react';
import tootedFailist from "../data/tooted.json";
import {Link} from 'react-router-dom';  // Link on URLiga seonduv ja kõik URLga seonduvad
//  tulevad react-router-dom'st   (Route, Routes, BrowserRouter)

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Nobe", "BMW", "Tesla"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

function Tooted() {
const[tooted, uuendaTooted] = useState(tootedFailist);

// A-Z
// Z-A
//Tähtede arv kasvavalt
//Tähtede arv kahanevalt

const sorteeriAZ = () => {
  tooted.sort()
  uuendaTooted(tooted.slice())
}

const sorteeriZA= () => {
  tooted.sort((a,b) => b.localeCompare(a));
  uuendaTooted(tooted.slice());
}

const sorteeriTahedKasvavalt= () => {
  tooted.sort((a, b) => a.length - b.length);
  uuendaTooted(tooted.slice());
}
const sorteeriTahedKahanevalt= () => {
  tooted.sort((a, b) => b.length - a.length);
  uuendaTooted(tooted.slice());
}


  return (
    <div>
      <button onClick={sorteeriAZ} >Sorteeria A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri Tähed Kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed Kahanevalt</button>
      {tooted.map((toode, i) => 
      <div key={i}>
        {toode}

         {/* vasakul pool kaldkriips - muidu liidab olemasolevale URL'ile ja
        paremal pool kaldkriips- muidu nuber tuleb URL'ui eelmise sõna otsa!!!  */}
        <Link to={"/Toode/" + i}>
          <button>Vaata lähemalt</button>
        </Link>
      </div> )}
      <div>Hetkel on {tooted.length} toodet. </div>
    </div>
  )
}

export default Tooted
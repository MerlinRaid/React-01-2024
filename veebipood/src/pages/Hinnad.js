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
  hinnad.sort((a,b) => a.toString().localeCompare(b.toString()));
  //hinnad.sort();  //a.toString, et number muutuks sõnaks, et saaks kasutada localeCompare, seda muid saab kasutada ainult sõnadega. 
  muudaHinnad(hinnad.slice());
}

const sorteeriZA =() => {
  hinnad.sort((a,b) => b.toString().localeCompare(a.toString()));
  //hinnad.reverse();
  muudaHinnad(hinnad.slice());
}

const sorteeriKasvavalt = () => {
  hinnad.sort((a, b) => a - b);
  muudaHinnad(hinnad.slice());
}

const sorteeriKahanevalt = () => {
  hinnad.sort((a, b) => b - a);
  muudaHinnad(hinnad.slice());
}

const lisaHind123= () => {
  hinnad.push(123);
  muudaHinnad(hinnad.slice())
}

const lisaHind= (lisatavHind) => {
  hinnad.push(lisatavHind);
  muudaHinnad(hinnad.slice())
}


const kustutaEsimene = () => {
  hinnad.splice(0, 1); // esimene on jrk number, teine mitu tk tahan ühe vajutusega kustutada
  muudaHinnad(hinnad.slice());
}

const kustutaTeine= () => {
  hinnad.splice(1, 1); 
  muudaHinnad(hinnad.slice());
}

const kustutaKolmas = () => {
  hinnad.splice(2, 1); 
  muudaHinnad(hinnad.slice());
}

const kustutaNeljas = () => {
  hinnad.splice(3, 1); 
  muudaHinnad(hinnad.slice());
}

//kui siin on sulgude sisu täidetud, siis tuleb midagi onClick seest kaasa saata
const kustutaHind = (jrknr) => {
  hinnad.splice(jrknr, 1); 
  muudaHinnad(hinnad.slice());
}



  return (
    <div>
    {  hinnad.length > 0 &&
      <div>

        <button onClick={lisaHind123}>Lisa Hind 123 lõppu juurde</button>
        <br /><br />

        <button onClick={kustutaEsimene}>Kustuta esimene</button>
        <button onClick={kustutaTeine}>Kustuta teine</button>
        <button onClick={kustutaKolmas}>Kustuta kolmas</button>
        <button onClick={kustutaNeljas}>Kustuta neljas</button>
        <br /><br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriKasvavalt}>Sorteeri Kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri Kahanevalt</button>

        {hinnad.map ((hind, jrknr) => 
          <div key={jrknr}>
            {hind} 
            <button onClick={() => kustutaHind(jrknr)}>X</button> 
            <button onClick={() => lisaHind(hind)}>Lisa</button> 
          </div> )}

        <div>Hetkel on lehel {hinnad.length} hinda. </div>
        <button onClick={() => muudaHinnad([])}>Eemalda hinnad</button>
      </div>}

      {hinnad.length === 0 && <div>Pole ühtegi hinda nähtaval!</div>}
    </div>
  )
}

export default Hinnad
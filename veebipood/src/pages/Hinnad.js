import React, { useState } from 'react'
import hinnadFailist from "../data/hinnad.json"
import { Link } from 'react-router-dom';
// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// [312, 1234, 56, 88,8]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

// Tühjenda nupp, mis kustub kui on .lenght väärtus 0 
// Kui pole ühtegi hinda, siis kuva <div>Pole ühtegi hinda nähtavl</div>

function Hinnad() {
const [hinnad, muudaHinnad]= useState(hinnadFailist)


const sorteeriAZ =() => {
  hinnad.sort((a,b) => a.number.toString().localeCompare(b.number.toString()));
  //hinnad.sort();  //a.toString, et number muutuks sõnaks, et saaks kasutada localeCompare, seda muid saab kasutada ainult sõnadega. 
  muudaHinnad(hinnad.slice());
}

const sorteeriZA =() => {
  hinnad.sort((a,b) => b.number.toString().localeCompare(a.number.toString()));
  //hinnad.reverse();
  muudaHinnad(hinnad.slice());
}

const sorteeriKasvavalt = () => {
  hinnad.sort((a, b) => a.number - b.number);
  muudaHinnad(hinnad.slice());
}

const sorteeriKahanevalt = () => {
  hinnad.sort((a, b) => b.number - a.number);
  muudaHinnad(hinnad.slice());
}

const lisaHind123= () => {
  hinnadFailist.push(123);
  muudaHinnad(hinnadFailist.slice())
}

const kustutaEsimene = () => {
  hinnadFailist.splice(0, 1); // esimene on jrk number, teine mitu tk tahan ühe vajutusega kustutada
  muudaHinnad(hinnadFailist.slice());
}

const kustutaTeine= () => {
  hinnadFailist.splice(1, 1); 
  muudaHinnad(hinnadFailist.slice());
}

const kustutaKolmas = () => {
  hinnadFailist.splice(2, 1); 
  muudaHinnad(hinnadFailist.slice());
}

const kustutaNeljas = () => {
  hinnadFailist.splice(3, 1); 
  muudaHinnad(hinnadFailist.slice());
}


const filtreeiPaarisarvud = () => {
  const vastus = hinnad.filter(hind => hind.number % 2 === 0);
  muudaHinnad(vastus);
}

const hinnadKokku = () => {
  let summa = 0;
  // summa = summa + 312;
  // summa = summa + 1234;
  // summa = summa + 56;
  // summa = summa + 88;
  // summa = summa + 8;
      //sama:
  // summa += 312;
  // summa += 1234;
  // summa += 56;
  // summa += 88;
  // summa +=  8;

  hinnad.forEach(hind => summa = summa + hind.number )
  return summa;
}

// .map(hind => MILLEGA_ASENDATAKSE)
  // .sort((a,b) => PLUSS_VÕI_MIINUS) -> plussiga muudetakse järjekord
  // .filter(hind => ÕIGE_VÕI_VÄÄR) -> õigega jäetakse alles
  // .forEach(hind => summa = summa + hind) -> igaühe kohta tehakse midagi



// Veebilehel veateate tähendus:
// Too many re-renders. React limits the number of renders to prevent an infinite loop.
// render ---> tähendab useState-i parempoolse funktsiooni käivitamine ehk HTMLi uuendus
// render ---> HTMLi uuendus

// onClick={() => sorteeriAZ()} --> ÕIGE.
  // onClick={sorteeriAZ} --> ÕIGE.
  // onClick={sorteeriAZ()} --> VALE. Jääb lõputu loop (tsükkel), sest sorteeriAZ funktsiooni sees
  //      on useState-i parempoolne funktsioon, mis läheb HTMLi uuendama. Ja kui seda tehakse,
  //      siis pannakse uuesti see funktsioon käima, mis läheb omakorda uuesti HTMLi uuendama

// <div>Kokkuarvutus, mis tagastab numbri: {hinnadKokku()}</div> --> ÕIGE.
  // <div>Kokkuarvutus, mis tagastab numbri: {hinnadKokku}</div> --> VALE. Sest ei käivitu
  // <div>Kokkuarvutus, mis tagastab numbri: {() => hinnadKokku()}</div> --> VALE. Sest ei käivitu

  return (
    <div>
    {  hinnad.length > 0 &&
      <div>

        <button onClick={lisaHind123}>Lisa Hind 123 lõppu juurde</button>
        <br /><br />

        <button onClick={kustutaEsimene}>Kustuta esimene</button>
        <button disabled={hinnad.length < 2} onClick={kustutaTeine}>Kustuta teine</button>
        <button disabled={hinnad.length < 3} onClick={kustutaKolmas}>Kustuta kolmas</button> 
        {hinnad.length >= 4 && <button onClick={kustutaNeljas}>Kustuta neljas</button>}
        {/* disablegi ei ole nupp enam aktiivne ja 4 puhul kaob nupp täitsa ära */}
        <br /><br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriKasvavalt}>Sorteeri Kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri Kahanevalt</button>
        <br /><br />
        <button onClick={filtreeiPaarisarvud}>Jäta alles paarisarvud</button>


        <h4>Hetkel on lehel {hinnad.length} hinda. </h4>

        {hinnad.map ((hind, jrknr) => 
          <div key={jrknr}>
            {hind.number}  ({hind.lisaja}) 
            <Link to={"/Hind/" +jrknr}>
              <button>Vaata lähemalt</button>
            </Link>
          </div> )}

         
        <div>Kogu summa on: {hinnadKokku()} </div>
        
        <button onClick={() => muudaHinnad([])}>Eemalda hinnad</button>
      </div>}

      {hinnad.length === 0 && <div>Pole ühtegi hinda nähtaval!</div>}
    </div>
  )
}

export default Hinnad
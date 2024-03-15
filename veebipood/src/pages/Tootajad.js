import React, { useState } from 'react'
import tootajadJSON from "../data/tootajad.json";
import { Link } from 'react-router-dom';

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Urmet", "Kaido", "Liina", "Maiki"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

// Tühjenda nupp, mis kustub kui on .lenght väärtus 0 
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi töötajat nähtav</div>


function Tootajad() {
  const [tootajad, uuendaTootajad] = useState(tootajadJSON)

// sorteeritakse KAS sõnu või numbreid
// kui võrdlen sõnu (tähti) --> a.localeCompare(b)
// kui võrdlen numbreid     --> a - b

  const originaal = () => {
    uuendaTootajad (tootajadJSON)
  }

  const sorteeriAZ= () => {
    tootajad.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriZA= () => {
    tootajad.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriTahedKasvavalt= () => {
    tootajad.sort((a, b) => a.nimi.length - b.nimi.length); //.length, et programm näeks sõna kui numbrit ja võrdleks sõna pikkust
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriTahedKahanevalt= () => {
    tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriKolmasTahtAZ= () => {                                                                   //  12345    12345
    tootajad.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2])); //Nr. 2 näitab, et 3 täht, sest esimene täht on 0 //a:Urmet b: Kaido
    uuendaTootajad(tootajad.slice());
  }



  const filtreeriTgaLoppev =() => {
    const vastus = tootajad.filter(t => t.nimi.endsWith("t"));
    uuendaTootajad(vastus);
  }

  const filtreeri5Tahelised =() => {
    const vastus = tootajad.filter(tootaja => tootaja.nimi.length === 5); //===true võib panna, aga ei pea
    uuendaTootajad(vastus);
  }

  const filtreeriVahemKui5Tahte =() => {
    const vastus = tootajad.filter(element => element.nimi.length < 5);
    uuendaTootajad(vastus);
  }

  const filtreeri3sTaht =() => {
    const vastus = tootajad.filter(e => e.nimi[2] === "i");
    uuendaTootajad(vastus);
  }

  const filtreeriLyhendigaAi=() => {
    const vastus = tootajad.filter(yksTootaja => yksTootaja.nimi.includes("ai") === true); //===true võib panna, aga ei pea
    uuendaTootajad(vastus);
  }

  const liidaTahed = () => {
    let summa = 0;
    tootajad.forEach(tootaja => summa += tootaja.nimi.length)
    return summa;
  }
 

  

  // Töötajate.js vaates kodus:
  // 1. Kustumaine
  // 2. Igaühe lõppu lisamise võimekus



  //Kodus:
  //TÕsta töötajate lisamine uued faili, täpselt nagu LisaToode.js on eraldi
  //1. Tegema LisTootaja.js fail
  //2. App.js see siduma URL ja failiga
  //3. Tegema sinna sattumiseks lingi
  //4. Tõstma sinna oleva JavaScripti LisaToode.js faili( useRef improt ka)
  //5. Import TootajadJSON faili
  //6. Asenda kuhu juurde lisad, nüüd lisad faili. 
  //7. Kustutan ära HTML'i uuenduse(muuda/uuenda algusega..)
  //8. Tõstma sinna oleva HTML'i LisaTootaja.js faili
  //9. LISAKS: Tee krontrollid(väikse tähega ei saa, tühjaks ei saa jätta, vähemalt 3 tähemärki)
  // 10. Sama asi Esindused.js osas
  //Tehtud sama asi Tooted ja Hinnad
  return (
    <div>
      <div>Töötajate tähtede arv: {liidaTahed()} </div>
      <br />
      <button onClick={originaal}>Tagasi originaali</button>
      <br /> <br />

      {tootajad.length > 0 && // siin on length, et n'ha mitu Arrayd on e kui palju töötajaid on 
      <div>
        
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri Tähed Kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed Kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri Kolmas Täht A-Z</button>
        <br /><br />

        <button onClick={filtreeriTgaLoppev}>Filtreeri 't'ga lõppevad</button>
        <button onClick={filtreeri5Tahelised}>Filtreeri täpselt 5 tähelised</button>
        <button onClick={filtreeriVahemKui5Tahte}>Filtreeri vähem kui 5 tähelised</button>
        <button onClick={filtreeri3sTaht}>Filtreeri kellel on kolmas täht 'i'</button>
        <button onClick={filtreeriLyhendigaAi}>Filtreeri kellel on see lühend 'ai'</button>


        {tootajad.map((tootaja, index) => 
          <div key={index}>
            <h3>{tootaja.nimi}</h3>
            <div>{tootaja.amet}</div>
            <div>{tootaja.email}</div>
            <div>{tootaja.vanus}</div>
            <Link to={"/Tootaja/" + index}>
              <button>Vaata lähemalt</button>
            </Link>
          </div> )}

        <div>Hetke on {tootajad.length} töötajat. </div>
        <button onClick={ () => uuendaTootajad ([])} >Ajutiselt peida töötajad</button> 
      </div>}

      


      {tootajad.length === 0 &&  <div>Ühtegi töötajat pole nähtav!</div>}

    </div>
  )
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort

//const [months, setMonths] = useState(['March', 'Jan', 'Feb', 'Dec']);
//const months = ['March', 'Jan', 'Feb', 'Dec'];
//months.sort();
//console.log(months);
// setMonths(months.slice());

//Küsige ChatGPT käest useState ülesandeid
// Küsige ChatGPT käest Array selgitusi

//https://www.udacity.com/course/intro-to-javascript--ud803
// https://www.codecademy.com/learn/introduction-to-javascript

//mozilla näide:
//const [words, setWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);
//const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter((word) => word.startsWith("e"));
// setWords(result);
//console.log(result);

export default Tootajad
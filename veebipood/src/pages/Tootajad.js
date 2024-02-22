import React, { useState } from 'react'

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Urmet", "Kaido", "Liina", "Maiki"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)

// Tühjenda nupp, mis kustub kui on .lenght väärtus 0 
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi töötajat nähtav</div>


function Tootajad() {
  const [tootajad, uuendaTootajad] = useState(["Urmet", "Kaido", "Liina", "Maiki", "Heidi", "Kaire", "Anet", "Maarja", "Epp"])

// sorteeritakse KAS sõnu või numbreid
// kui võrdlen sõnu (tähti) --> a.localeCompare(b)
// kui võrdlen numbreid     --> a - b

  const originaal = () => {
    uuendaTootajad (["Urmet", "Kaido", "Liina", "Maiki", "Heidi", "Kaire", "Anet", "Maarja", "Epp"])
  }

  const sorteeriAZ= () => {
    tootajad.sort((a,b) => a.localeCompare(b));
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriZA= () => {
    tootajad.sort((a,b) => b.localeCompare(a));
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriTahedKasvavalt= () => {
    tootajad.sort((a, b) => a.length - b.length); //.length, et programm näeks sõna kui numbrit ja võrdleks sõna pikkust
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriTahedKahanevalt= () => {
    tootajad.sort((a, b) => b.length - a.length);
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriKolmasTahtAZ= () => {                                                                   //  12345    12345
    tootajad.sort((a,b) => a[2].localeCompare(b[2])); //Nr. 2 näitab, et 3 täht, sest esimene täht on 0 //a:Urmet b: Kaido
    uuendaTootajad(tootajad.slice());
  }



  const filtreeriTgaLoppev =() => {
    const vastus = tootajad.filter(t => t.endsWith("t"));
    uuendaTootajad(vastus);
  }

  const filtreeri5Tahelised =() => {
    const vastus = tootajad.filter(tootaja => tootaja.length === 5); //===true võib panna, aga ei pea
    uuendaTootajad(vastus);
  }

  const filtreeriVahemKui5Tahte =() => {
    const vastus = tootajad.filter(element => element.length < 5);
    uuendaTootajad(vastus);
  }

  const filtreeri3sTaht =() => {
    const vastus = tootajad.filter(e => e[2 === "i"]);
    uuendaTootajad(vastus);
  }

  const filtreeriLyhendigaAi=() => {
    const vastus = tootajad.filter(yksTootaja => yksTootaja.includes("ai") === true); //===true võib panna, aga ei pea
    uuendaTootajad(vastus);
  }




  return (
    <div>

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


        {tootajad.map(tootaja => <div>{tootaja}</div> )}
        <div>Hetkel on {tootajad.length} töötajat. </div>
        <button onClick={ () => uuendaTootajad ([])} >Eemalda töötajad</button> 
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
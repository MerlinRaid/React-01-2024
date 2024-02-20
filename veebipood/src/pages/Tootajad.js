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
  const [tootajad, uuendaTootajad] = useState(["Urmet", "Kaido", "Liina", "Maiki"])

  const  sorteeriAZ= () => {
    tootajad.sort();
    uuendaTootajad(tootajad.slice());
  }

  return (
    <div>

    {tootajad.length > 0 &&
    <div>
  <   button onClick={sorteeriAZ}>Sorteeri A-Z</button>
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

export default Tootajad
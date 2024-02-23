import React, { useState } from 'react'

function Books() {
const [books, uuendaBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Little Women", "The Raven" ])


const originaal = () => {
  uuendaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Little Women", "The Raven" ])
}
const sorteeriAZ = () => {
  books.sort((a,b) => a.localeCompare(b));
  uuendaBooks(books.slice()); 
}
const sorteeriZA = () => {
  books.sort((a,b) => b.localeCompare(a));
  uuendaBooks(books.slice()); 
}

const sorteeriSonaPikkus = () => {
  books.sort((a, b) => a.length - b.length);
  uuendaBooks(books.slice()); 
  }

  const sorteeriTeineTahtAZ = () => {
    books.sort((a,b) => a[1].localeCompare(b[1]));
    uuendaBooks(books.slice()); 
    }

    const sorteeriSonadeArvuJargi = () =>{
      books.sort((a, b) => a.split(' ').length - (b.split(' ').length));
      uuendaBooks(books.slice());
    }

    const sorteeriEelviimaseTaheJargi= () => {
      books.sort((a, b) => a.charCodeAt(a.length - 2) - b.charCodeAt(b.length - 2));
      uuendaBooks(books.slice()); 
    }

    const filtreeriThegaAlgavad =() => {
      const vastus = books.filter(b => b.startsWith("The"));
      uuendaBooks(vastus);
    }

    const filtreeriLyhendigaAnd=() => {
      const vastus = books.filter(b => b.includes("and")); 
      uuendaBooks(vastus);
    }

    const filtreeriRohkemKui10Tahte =() => {
      const vastus = books.filter(b => b.length > 10);
      uuendaBooks(vastus);
    }

    const filtreeriVahemKui7Tahte =() => {
      const vastus = books.filter(b=> b.length < 7);
      uuendaBooks(vastus);
    }
    
    const filtreeriRohkemKui3Sonalised = () => {
      const vastus = books.filter(book => {
        const sonadeArv = book.split(' ').length;
        return sonadeArv >= 3;
      });
      uuendaBooks(vastus);
    }
    
    // const filtreeriEelviimaneTahtOnC =() => {
    //   const vastus = books.filter(b=> b.length-2("c") === true);
    //   uuendaBooks(vastus);
    // }

    const filtreeriEelviimaneTahtOnC = () => {
      const vastus = books.filter(book => {
        if (book.length >= 2) {
          const eelviimaneTaht = book.charAt(book.length - 2);
          return eelviimaneTaht.toLowerCase() === 'c';
        }
        return false; 
      });
      uuendaBooks(vastus);
    }

   



   

  return (
    <div>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriSonaPikkus}>Sorteeri Sõna pikkuse järgi</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri Teise tähe järgi A-Z</button>
      <button onClick={sorteeriSonadeArvuJargi}>Sorteeri sõnade arvu järgi</button>
      <button onClick={sorteeriEelviimaseTaheJargi}>Sorteeri eelviimase tähe järgi</button>
      <br /><br />

      <button onClick={originaal}>Tagasi originaali</button>
      <br />

      <button onClick={filtreeriThegaAlgavad}>Filtreeri 'The'ga algavad</button>
      <button onClick={filtreeriLyhendigaAnd}>Filtreeri kellel on see lühend 'and'</button>
      <button onClick={filtreeriRohkemKui10Tahte}>Filtreeri rohkem kui 10 tähelised</button>
      <button onClick={filtreeriVahemKui7Tahte}>Filtreeri vähem kui 7 tähelised</button>
      <button onClick={filtreeriRohkemKui3Sonalised}>Filtreeri kolme või rohkema sõnalised</button>
      <button onClick={filtreeriEelviimaneTahtOnC }>Filtreeri jättes alles kellel eelviimane täht on “C”</button>
   
        {books.map(b => <div>{b}</div>)}


    </div>
  )
}

export default Books
import React, { useState } from 'react'

function Numbrid() {
    const [numbrid, uuendaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 20, 11])

    const originaal = () => {
        uuendaNumbrid ([4, 23, 7, 39, 19, 0, 9, 14, 135, 20, 11])
      }

    const sorteeriKasvavalt = () => {
        numbrid.sort((a, b) => a - b);
        uuendaNumbrid(numbrid.slice());
      }

    //   // ChatGPT1
    // const sorteeriKasvavalt = () => {
    //     const vastus = [...numbrid].sort((a, b) => a - b);
    //     uuendaNumbrid(vastus);
    //   }

    // ChatGPT2
    // const sorteeriKasvavalt = () => {
    //   numbrid.sort((a, b) => a - b);
    //   uuendaNumbrid([...numbrid]); //numbris.slice() ja [...numbrid] teeb sama välja
    // }

      const   sorteeriKahanevalt = () => {
        numbrid.sort((a, b) => b - a);
        uuendaNumbrid(numbrid.slice());
      }

      
    const sorteeriAZ =() => {
     numbrid.sort((a,b) => a.toString().localeCompare(b.toString())); 
     uuendaNumbrid(numbrid.slice());
  }

    const sorteeriZA =() => {
     numbrid.sort((a,b) => b.toString().localeCompare(a.toString())); 
     uuendaNumbrid(numbrid.slice());
  }

  const filtreeriSuuremadKui8 =() => {
    const vastus = numbrid.filter(nr => nr > 5);
   uuendaNumbrid(vastus);
  }

  const filtreeriVaiksemadKui10 =() => {
    const vastus = numbrid.filter(nr => nr < 10);
   uuendaNumbrid(vastus);
  }

  const filtreeriPaarisarvud = () => {
    const vastus = numbrid.filter(nr => nr % 2 === 0);
    uuendaNumbrid(vastus);
  }

  const filtreeriPaaritudArvud = () => {
    const vastus = numbrid.filter(nr => nr % 2 !== 0);
    uuendaNumbrid(vastus);
  }
  
  // ChatGPT lahendus:
  // const filtreeriAlgavad1 = () => {
  //   const vastus = numbrid.filter(n => {
  //     const numStr = n.toString();
  //     return numStr.startsWith('1');
  //   });
  //   uuendaNumbrid(vastus);
  // }

  //Meie lahendus:
  const filtreeriAlgavad1 = () => {
     const vastus = numbrid.filter(number => number.toString().startsWith('1'));
     uuendaNumbrid(vastus);
     }


// ChatGPT lahendus:
  // const filtreeriSisaldavad3 = () => {
  //   const vastus = numbrid.filter(n => {
  //     const numStr = n.toString();
  //     return numStr.includes('3');
  //   });
  //   uuendaNumbrid(vastus);
  // }

  //Meie lahendus:
  const filtreeriSisaldavad3 = () => {
    const vastus = numbrid.filter(number => number.toString().includes('3'));
    uuendaNumbrid(vastus);
    }

    

  return (
    <div>
        <br /><br />
        <button onClick={sorteeriKasvavalt}>Sorteeri Kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri Kahanevalt</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <br /><br />

        <button onClick={originaal}>Tagasi originaali</button>
        <br /> 

        <button onClick={filtreeriSuuremadKui8}>Filtreeri suuremad kui 8</button>
        <button onClick={filtreeriVaiksemadKui10}>Filtreeri väiksemad kui 10</button>
        <button onClick={filtreeriPaarisarvud}>Filtreeri paarisarvud</button>
        <button onClick={filtreeriPaaritudArvud}>Filtreeri paaritud arvud</button>
        <button onClick={filtreeriAlgavad1}>Filtreeri numbrid mis algavad 1-ga</button>
        <button onClick={filtreeriSisaldavad3}>Filtreeri numbrid mis siladvad 3-e</button>

        {numbrid.map(n => <div>{n}</div>)}


    </div>
  )
}

export default Numbrid
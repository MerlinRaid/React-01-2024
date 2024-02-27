import React, { useRef, useState } from 'react'
import nimedJSON from "../nimed.json"

function TagasisideAndjad() {
    const [tagasisideAndjad, uuendaTagasisideAndjad] = useState (nimedJSON)
    const tagasisideRef = useRef ();

    const filtreeriMTahegaAlgavad = () => {
        const vastus = tagasisideAndjad.filter(ta => ta.startsWith("M"));
        uuendaTagasisideAndjad(vastus);
    }

    const filtreeri6TahegaNimed = () => {
        const vastus = tagasisideAndjad.filter(ta => ta.length === 6);
        uuendaTagasisideAndjad(vastus);
    }

    const filtreeriYTahegaLoppevad = () => {
        const vastus = tagasisideAndjad.filter(ta => ta.endsWith("y"));
        uuendaTagasisideAndjad(vastus);
    }

    const sorteeriZA= () => {
        tagasisideAndjad.sort((a,b) => b.localeCompare(a));
        uuendaTagasisideAndjad(tagasisideAndjad.slice());
      }

      const kustutaTagasisideAndja= (index) => {
        tagasisideAndjad.splice(index, 1);
        uuendaTagasisideAndjad(tagasisideAndjad.slice());
      }

      const lisaTagasisideAndja = () => {
        tagasisideAndjad.push(tagasisideRef.current.value);
        uuendaTagasisideAndjad(tagasisideAndjad.slice())
      }


      

  return (
    <div> <h2>Tagasiside Andjad:</h2>

    <button onClick={filtreeriMTahegaAlgavad}>Filtreeri 'M' tähega algavad</button>
    <button onClick={filtreeri6TahegaNimed}>Filtreeri 6 tähelised nimed</button>
    <button onClick={filtreeriYTahegaLoppevad}>Filtreeri 'y' tähega lõppevad</button>
    <br /><br />

    <button onClick={sorteeriZA}>Sorteeri Z-A</button>

    <h5>Tagasiside on andnud {tagasisideAndjad.length} inimest. </h5>
    {tagasisideAndjad.map ((tagasisideAndja, index) => 
        <div> 
           <div>EST-{tagasisideAndja}
           <button onClick={() => kustutaTagasisideAndja()} >Kustuta</button></div> 
        </div> )}

       <h4><label>Lisa tagasiside andja</label></h4> 
        <input ref={tagasisideRef} type="text" />
        <button onClick={lisaTagasisideAndja}>Lisa</button>
    
    </div>
  )
}

export default TagasisideAndjad
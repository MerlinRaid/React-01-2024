import React, { useState } from 'react'
import tegevusedJson from "../tegevused.json"

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusedJson)

    const n2itakasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);
    }   

    
    const n2itakasutajaKaks = () => {
        const vastus = tegevused.filter(element => element.userId === 2);
        uuendaTegevused(vastus);
    }  

    
    const n2itakasutajaKolm = () => {
        const vastus = tegevused.filter(element => element.userId === 3);
        uuendaTegevused(vastus);
    }  

    const n2itak6iki = () => {
        uuendaTegevused(tegevusedJson);
        }
    
        const valmisTegevus = () => {
            const vastus = tegevused.filter(tegevus => tegevus.completed  === true)
            uuendaTegevused(vastus);
        }

        const mittevalmisTegevus = () => {
            const vastus = tegevused.filter(tegevus => tegevus.completed  === false)
            uuendaTegevused(vastus);
            
        }

        const algabTTahega = () => {
            const vastus = tegevused.filter(tegevus => tegevus.title.startsWith("t"));
            uuendaTegevused(vastus);
        }

        const RohkemKui20Tahte = () => {
            const vastus = tegevused.filter(tegevus => tegevus.title.length > 20);
            uuendaTegevused(vastus);
        }

  return (
    <div>
        <h3> Hetke on {tegevused.length} tegevust </h3>
        <button onClick={() => n2itakasutajaYks()} > Kuva kõik kasutaja ID 1 tegevused </button>
        <button onClick={() => n2itakasutajaKaks()} > Kuva kõik kasutaja ID 2 tegevused </button>
        <button onClick={() => n2itakasutajaKolm()}> Kuva kõik kasutaja ID 3 tegevused </button>
        <button onClick={() => valmisTegevus()}> Kuva kõik valmis tegevused </button>
        <button onClick={() => mittevalmisTegevus()}> Kuva kõik mittevalmis tegevused </button>
        <button onClick={() => algabTTahega()}> Kuva kõik "t" tähega algavad tegevused </button>
        <button onClick={RohkemKui20Tahte}> Kuva tegevused, millel on tähemärke rohkem kui 20 </button>
        <button onClick={() => n2itak6iki()}> Kuva kõik tegevused tagasi </button>
       
       

        {tegevused.map(element => 
            <div>
                <div>Kasutaja ID: {element.userId}</div>
                <div>ID: {element.id}</div>
                <div>Tegevus: {element.title}</div>
                <div>Olek: {element.completed ? "Valmis tegevus" : "Mittevalmis tegevus"}</div>
            </div> )}

    </div>
  )
}

export default Tegevused
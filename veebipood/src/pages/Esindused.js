import { useState } from "react"
import esindusedFailist from "../data/esindused.json"


function Esindused() {
  // vasakul pool( []sees) on muutuja, mille sees on muutuv väärtus
  //    see võib lõpmatuseni muutuda
  // paremal pool ( []sees) on muutja, tema abil muudan muutujat
  const[linn, uuendaLinn] = useState("Pärnu");
  
  const [keskused, uuendaKeskused] = useState(esindusedFailist);



const sorteeriAZ = () => {
  keskused.sort((a,b) => a.localeCompare(b));
  uuendaKeskused(keskused.slice());
}


const sorteeriZA = () => {
  keskused.sort((a,b) => b.localeCompare(a));
  uuendaKeskused(keskused.slice());
}


const sorteeriTahedKasvavalt = () => {
  keskused.sort((a, b) => a.length - b.length); 
  uuendaKeskused(keskused.slice());
}

const sorteeriTahedKahanevalt = () => {
keskused.sort((a, b) => b.length - a.length);
uuendaKeskused(keskused.slice());
}
const sorteeriTeineTahtAZ = () => {
  keskused.sort((a,b) => a[1].localeCompare(b[1])); 
    uuendaKeskused(keskused.slice());
}

const filtreeriEgaLoppevad = () => {
  const vastus = keskused.filter(keskus => keskus.endsWith("e"));
  uuendaKeskused(vastus);
}

const filtreeriVah7Tahelised = () => {
  const vastus = keskused.filter(keskus => keskus.length >= 7);
  uuendaKeskused(vastus)
}

const filtreeri9Tahelised = () => {
  const vastus = keskused.filter(keskus => keskus.length === 9); 
  uuendaKeskused(vastus)
}

const filtreeriLyhenditIsSisaldavad = () => {
  const vastus = keskused.filter(keskus => keskus.includes("is") === true); 
  uuendaKeskused(vastus);
}

const filtreeriNeljasTahtI = () => {
  const vastus = keskused.filter(keskus => keskus[3] === "i");
  uuendaKeskused(vastus);
}



 


 

  return (
    <div>
    <div>Esindused</div>
    <span className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Tallinn")}>Tallinn(7)</span>
    <span className={linn === "Tartu" ? "linn-aktiivne" :"linn"} onClick={() => uuendaLinn("Tartu")}>Tartu(2)</span>
    <span className={linn === "Narva" ? "linn-aktiivne" :"linn"} onClick={() => uuendaLinn("Narva")} >Narva(1)</span>
    <span className={linn === "Pärnu" ? "linn-aktiivne" :"linn"} onClick={() => uuendaLinn("Pärnu")}> Pärnu(1)</span>
    <br /> <br />  
    {/* br on vaheride vahepeal on vaja panna br x2, et toimiks */}

    <div>Aktiivne linn: {linn} </div>

    { linn === "Tallinn" && 
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri Tähed Kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed Kahanevalt</button>
        <button onClick={sorteeriTeineTahtAZ}>Sorteeri Teine Täht A-Z</button>
        <br /><br />

        <button onClick={filtreeriEgaLoppevad}>Filtreeri 'e'ga lõppevad</button>
        <button onClick={filtreeriVah7Tahelised}>Filtreeri vähemalt 7 tähelised</button>
        <button onClick={filtreeri9Tahelised}>Filtreeri täpselt 9 tähelised</button>
        <button onClick={filtreeriLyhenditIsSisaldavad}>Filtreeri kellel on sees lühend 'is'</button>
        <button onClick={filtreeriNeljasTahtI}>Filtreeri kellel on neljas täht 'i'</button>
        <br /><br />

      {keskused.map((keskus,index)  => 
        <div key={index}>
          {keskus}
        </div>)}

      
      {/* 
      KOJU:
      Kustutamise võimekus
      Sama lõppu lisamise võimekus
      Läbi inputi enda kirjutatu lõppu lisamise võimekus
      Saab teha ainult Tallinnale, sest seal on .map()
      */}
    </div>}
    

  {/* hard-coded allpool */}

    { linn === "Tartu" && <div>
      <div>Raatuse</div>
      <div>Lõunakeskus</div>
    </div>}
   
      { linn === "Narva" && <div>Fama</div>}
    
      { linn === "Pärnu" && <div>Port Artur 2</div>}
    
    </div>
  )
}

export default Esindused
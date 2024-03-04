import { useState } from "react"
import esindusedFailist from "../data/esindused.json"


function Esindused() {
  // vasakul pool( []sees) on muutuja, mille sees on muutuv väärtus
  //    see võib lõpmatuseni muutuda
  // paremal pool ( []sees) on muutja, tema abil muudan muutujat
  const[linn, uuendaLinn] = useState("Pärnu");
  
  const [keskused, uuendaKeskused] = useState(esindusedFailist);



const sorteeriAZ = () => {
  keskused.sort();
  uuendaKeskused(keskused.slice());
}


const sorteeriZA = () => {}

const sorteeriTahedKasvavalt = () => {}

const sorteeriTahedKahanevalt = () => {}

const sorteeriTeineTahtAZ = () => {}

const filtreeriEgaLoppevad = () => {}

const filtreeriVah7Tahelised = () => {}

const filtreeri9Tahelised = () => {}

const filtreeriLyhenditSisaldavad = () => {}

const filtreeriNeljasTahtI = () => {}


const kustutaTallinnaEsindus = (index) => {
  esindusedFailist.splice(index, 1);
  uuendaKeskused(esindusedFailist.slice());
 }
 
 const lisaTallinnaEsindus = (uusKeskus) => {
  esindusedFailist.push(uusKeskus);
   uuendaKeskused(esindusedFailist.slice());
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
      {keskused.map((keskus,index)  => 
        <div key={index}>
          {keskus}
          <button onClick={() => kustutaTallinnaEsindus(index)}>Kustuta</button> 
          <button onClick={() => lisaTallinnaEsindus(keskus)}>Lisa lõppu üks juurde</button> 
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
import { useState } from "react"

function Avaleht() {
    // const tegelased = [
    //     // {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland", vanus: 12},
    //     // {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland", vanus: 13},
    //     // {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood", vanus: 14},
    //     // {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Wood", vanus: 15},
    //     // {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove", vanus: 16}
    // ]
    const tegelased = JSON.parse(localStorage.getItem("tegelased") || [])
    const [klikitudNimi,uuendaKlikitudNimi] = useState ("");

    const kuvaNimi = (tegelane) => {
        //console.log(tegelane.eesnimi);
        uuendaKlikitudNimi(tegelane.eesnimi);
        }
    
   
    
    const valiTegelane = (yksTegelane) =>{
        const valitud = JSON.parse(localStorage.getItem("valitudTegelane")) || [];
        valitud.push(yksTegelane);
        localStorage.setItem("valitudTegelane", JSON.stringify(valitud));
    }

  return (
<div>
    
    { klikitudNimi !== "" && <div>Klikisid tegelase {klikitudNimi} peal</div>}
     {tegelased.map (tegelane => <div>
        <div>Eesnimi: {tegelane.eesnimi}</div>
        <div>Perekonnanimi: {tegelane.perenimi}</div>
        <div>Elukoht: {tegelane.elukoht}</div>
        <div>Vanus: {tegelane.vanus}</div>
        <button onClick={() => kuvaNimi(tegelane)}  >Kuva nimi</button>
        <button onClick={() => valiTegelane(tegelane)}>Vali tegelane</button>
        <br /><br />

     </div> )}
    {/* <div>
            <div>Mickey</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>
    <div>
        <div>Minni</div>
        <div>Mouse</div>
        <div>Disneyland</div>
    </div>
    <div>
        <div>Winnie</div>
        <div>Pooh</div>
        <div>Hundred Acre Wood</div>
    </div>
    <div>
        <div>Roo</div>
        <div>Kangaroo</div>
        <div>Hundred Acre Wood </div>
    </div>
    <div>
        <div>Scooby</div>
        <div>Doo</div>
        <div>Crystal Cove</div>
    </div> */}
</div>
    

    
       
    
  )
}

export default Avaleht
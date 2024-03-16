import  { useState } from 'react'

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");
    const tootajad = [
        {nimi: "Urmet", ala: "Direktor", telefon: "+31312312"},
        {nimi: "Kaido", ala: "Avalike suhete juht", telefon: "+313124123"},
        {nimi: "Liina", ala: "Büroojuht", telefon: "+3131231231"},
        {nimi: "Maiki", ala: "Finantsjuht", telefon: "+3131231231"}, 
        {nimi: "Heidi", ala: "Tiimijuht", telefon: "+31231231"}, 
        {nimi: "Kaire", ala: "Kvaliteedijuht", telefon: "+564537833"},
        {nimi: "Arvo Part", ala: "Uudisklippide taustamuusika", telefon: "+31312312"},
        {nimi: "Kelly Sildaru", ala: "Pustolreporter", telefon: "+313124123"},
        {nimi: "Edward von Longus", ala: "Uudiste kujundamine", telefon: "+3131231231"},
        {nimi: "Kerli Koiv", ala: "Valisturgude spetsialist", telefon: "+312312312"}
    ]

    const [valitud, uuendaValitud] = useState("")

    const v6tanYhendust = (tootaja) => {
        n2itaKontakt(tootaja.telefon)
        uuendaValitud(tootaja.nimi)
    }

    return (
        <div>
            <div>See on meist leht, nähtav aadressil localhost:3000/meist aadressil</div>
            <div>Meie töötajad:</div>
            {/* VALITUD INIMENE: {valitud} */}
            <br />

            {tootajad.map(tootaja =>
                <div className={tootaja.nimi === valitud ? "valitud" : undefined }>
                    <div>{tootaja.nimi}</div>
                    <div>{tootaja.ala}</div>
                    <button onClick={() => v6tanYhendust(tootaja)}>Võta ühendust</button>
                    <br /><br />
                </div>
            )}

        {/* 
        <div>Arvo Pärt</div>
        <div>Uudisklippide taustamuusika</div>
        <button onClick={() => n2itaKontakt('+31312312')}>Võta ühendust</button>
        <br /><br />

        <div>Kelly Sildaru</div>
        <div>Püstolreporter</div>
        <button onClick={() => n2itaKontakt('+313124123')}>Võta ühendust</button>
        <br /><br />

        <div>Edward von Lõngus</div>
        <div>Uudiste kujundamine</div>
        <button onClick={() => n2itaKontakt('+3131231231')}>Võta ühendust</button>
        <br /><br />

        <div>Kerli Kõiv</div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() =>n2itaKontakt('+31231231')}>Võta ühendust</button>
        <br /><br />
        
     </div> ); */}
     { kontakt !== "" && <h4>Tema kontakt: {kontakt}</h4>}
     </div>
  )
}

export default Meist;
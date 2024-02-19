import { useState } from "react"

function Kontakt() {
const [aadress, määraAadress]= useState("Tallinn");
const [telefon, määraTelefon] = useState("5512345");
const [email, määraEmail] = useState("bla@baa.com");
const [ingliseKeelne, määraIngliseKeelne] =useState(false);

const ingliseks = () => {
    määraAadress ("London");
    määraTelefon ("12312312");
    määraEmail ("london@london.com");
    määraIngliseKeelne (true);
}

const eesti = () => {
  määraAadress ("Tallinn");
  määraTelefon ("5512345");
  määraEmail ("bla@baa.com");
  määraIngliseKeelne (true);
}


  return (
    <div>
      <div>{aadress}</div>
      <div>{telefon}</div>
      <div>{email}</div>

      <button onClick={ingliseks}>Muuda inglise keelseks</button>
      { ingliseKeelne === true && <div>leht on inglise keelne</div>}
      <button onClick={eesti}>Muuda inglise keelseks</button>
      { ingliseKeelne === false && <div>leht on inglise keelne</div>}
       
    </div>
  )
}

export default Kontakt
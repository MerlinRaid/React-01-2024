import React from 'react'
import { Link } from 'react-router-dom'

function Menyy() {
  return (
    <div>
        {/* arendaja vaates converditakse <Link to="esindused">  :  <a href="esindused"> */}

        <Link  className="navlink" to="/kontakteeru">
              <span>Kontakteeru meiega</span>
            </Link>

             <Link  className="navlink" to="/esindused">
              <img src="/esindused.svg" alt="" />
              <span>Esindused</span>
            </Link>

            <Link className="navlink"  to="/arikliendile">
              <img src="/ariklient.svg" alt="" />
              <span>Ärikliendile</span>
            </Link>

            <Link className="navlink"  to="/osta-kinkekaart">
              <img src="/kinkekaart.svg" alt="" />
              <span >Kinkekaart</span>
            </Link>


            <Link className="navlink"  to="/Ostukorv">
            <img src="/shopping.svg" alt="" />
              <span>Ostukorv</span>
            </Link>

            <Link className="navlink"  to="/Seaded">
              <span>Seaded</span>
            </Link>

            <Link className="navlink"  to="/Tootajad">
              <span>Töötajad</span>
            </Link>

            <Link className="navlink"  to="/Hinnad">
              <span>Hinnad</span>
            </Link>

            <Link className="navlink"  to="/Tooted">
              <span>Tooted</span>
            </Link>

            

            <br /> <br />

            <Link className="navlink"  to="/Lisa-Toode">
              <span>Lisa Toode</span>
            </Link>
            
            <Link className="navlink"  to="/Lisa-Hind">
              <span>Lisa hind</span>
            </Link>

            <Link className="navlink"  to="/Lisa-Tootaja">
              <span>Lisa Tootaja</span>
            </Link>

            <Link className="navlink"  to="/Lisa-Esindus">
              <span>Lisa Esindus</span>
            </Link>

            <Link className="navlink"  to="/HaldaTootajad">
              <span>Halda Töötajaid</span>
            </Link>

            <Link className="navlink"  to="/HaldaEsindused">
              <span>Halda Esindusi</span>
            </Link>

            <Link className="navlink"  to="/HaldaHindu">
              <span>Halda Hindu</span>
            </Link>

            <Link className="navlink"  to="/Haldatooted">
              <span>Halda tooted</span>
            </Link>


    </div>
  )
}

export default Menyy
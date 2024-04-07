import React from 'react'
import kink from './images/kink.png'
import tasu from './images/tasu.png'
import alarm from './images/alarm.png'
import { Link } from "react-router-dom"

import './Hinnad.css'





const Hinnad = () => {
    return (
        <div className='hinnad' id='hinnad'>
        <div className='container'>
            <h2>Hinnad</h2>
            <span className='line'></span>
            <div className='content'>
                <div className='card'>
                    <img src={kink} alt='telefonist'/>
                    <p><b>Tasuta:</b></p>
                    <p><span>0€</span></p>
                    <p>Kasutaja loomine.</p>
                    <p>Appi tõmbamine. </p>
                    <p>Raamatu täitmine.</p>
                </div>
                <div className='card'>
                    <img src={alarm} alt='telefonist'/>
                    <p><b>Ära unusta:</b></p>
                    <p><span></span></p>
                    <p>Äpp saadab sulle meeldetuletusi.</p>
                    <p>Abistab sind raamatu täitmisel.</p>
                    <p>On igal hetkel käepärast.</p>
                </div>
                <div className='card'>
                    <img src={tasu} alt='lihne'/>
                    <p><b>Tasuline:</b></p>
                    <p><span>69.99€</span></p>
                    <p>Raamatu tellimine.</p>
                    <p>Raamatu pdf kujul allalaadimine.</p>
                    <p>Kinkekaart</p>
                    
                </div>
            </div>
        </div>
        <Link to={'/regitser'} >
        <button className='button'>REGISTREERU</button>
        </Link>
        <Link to={'/login'} >
        <button className='button'>LOGI SISSE</button>
        </Link>
            
        </div>
        
    )
}

export default Hinnad
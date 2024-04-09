import React from 'react'
import tutvustus from './images/tutvustus.png'
import './Tutvustus.css'

const Tutvustus = () => {
    return (
        <div className='tutvustus' id='tutvustus'>
            <div className='container'>
                <img src={tutvustus} alt='tutvustus' />
                <div className='col-2'>
                    <h2>Beebiraamat</h2>
                    <span className='line'></span>
                    <p>Paljud emad on kurtnud, et digitaalselt täidetavat beebiraamatuid pole. Paberkandjal raamatu täitmine on, aga aeganõudev ja jääb tihti peale poolikuks ja vajub unustusehõlma. Paljud vanemad on kogenud, et paberkandjal beebiraamatute täitmine võib olla tüütu ja sageli jääb see pooleli. Lisaks selle, kui raamat saab täidetud, siis kellele see jääb, kas vanematele või lapsele ? </p>
                    <p>Digitaalselt täidetav beebiraamat on saadaval nii veebilehel kui ka nutirakenduse kaudu, mis tähendab, et raamat pole kunagi liiga kaugel ja täitmine on mugav ja paindlik.</p>
                    <button className='button'>Alusta täitmist</button>
                </div>
            </div>
        </div>
    )
}

export default Tutvustus
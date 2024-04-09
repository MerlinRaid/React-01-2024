import React from 'react'
import './Esikuva.css'
import {Link} from 'react-router-dom'; 

const Esikuva = () => {
    return (
        <div className='esikuva'>
            <div className='content'>
                <p></p>
                <p></p> 
                <br />
                <p>Milleks raisata aega?</p>
                <p>Ole kaval ja vali digitaalselt täidetav beebiraamat!</p>
                <Link to='/hinnad'>
                    <button className='button'>Alusta täitmist</button>
                </Link>
            </div>
        </div>
    )
}

export default Esikuva
import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'; 

const Hero = () => {
    return (
        <div className='hero'>
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

export default Hero
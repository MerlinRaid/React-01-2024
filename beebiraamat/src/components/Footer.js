import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Avaleht</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#tutvustus'>Beebiraamat</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#eelised'>Eelised</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Demo</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#kinkekaart'>Kinkekaart</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>Kõik õigused kuuluvad DigiBeebi OÜ'le</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
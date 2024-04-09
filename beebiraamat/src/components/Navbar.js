import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'black' }} />)
                        : (<FaBars size={30} style={{ color: 'black' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Avaleht</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#tutvustus' onClick={closeMenu}>Beebiraamat</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#eelised' onClick={closeMenu}>Eelised</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#kinkekaart' onClick={closeMenu}>Kinkekaart</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/hinnad' onClick={closeMenu}>Hinnad</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/login' onClick={closeMenu}>Logi sisse</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/register' onClick={closeMenu}>Registreeru</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
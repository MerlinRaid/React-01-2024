import React from 'react'
import raamatud from '../images/raamatud.png'
import kasutaja from '../images/kasutaja.png'
import arved from '../images/arved.png'
import {Link} from 'react-router-dom'; 


import '../SisseLogitud/Konto.css'

const Konto = () => {
    return (
        <div className='konto' id='konto'>
            <div className='container'>
                <h2>Sinu Konto</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={kasutaja} alt='telefonist'/>
                        <p>Konto teave</p>
                        <p><span></span></p>
                        <p></p>
                        <Link to={'/sinukonto'} >
                        < button className='button'>Vaata lähemalt</button>
                        </Link>
                    </div>
                    <div className='card'>
                        <img src={raamatud} alt='lihne'/>
                        <p>Sinu raamatud</p>
                        <p><span></span></p>
                        <p></p>
                        <Link to={'/sinuraamatud'} >
                        < button className='button'>Vaata lähemalt</button>
                        </Link>
                    </div>
                    <div className='card'>
                        <img src={arved} alt='galerii'/>
                        <p>Arved</p>
                        <p><span></span></p>
                        <p></p>
                        <Link to={'/arved'}  >
                        < button className='button'>Vaata lähemalt</button>
                        </Link>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Konto
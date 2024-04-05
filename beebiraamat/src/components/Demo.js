import React from 'react'
import './Demo.css'
import {Link} from 'react-router-dom'; 

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Lihtne, kiire, mugav!</p>
                    <p>DigiBeebi</p>
                    <p>DigiBeebi eesmärk on muuta beebiraamatute täitmine lihtsaks ja kaasaegseks. Digitaalne beebiraamat aitab vanematel hoida aega kokku, et veeta kvaliteetaega oma lapsega ja säilitada neid väärtuslikke mälestusi.</p>
                    <Link to='/hinnad'>
                        <button className='button'>Alusta täitmist</button>
                    </Link>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
import React from 'react'
import telefonist from './images/telefonis.png'
import lihtne from './images/lihtne.png'
import galerii from './images/galerii.png'
import raamat from './images/raamat.png'
import pere from './images/pere.png'
import alarm from './images/alarm.png'

import './Eelised.css'

const Eelised = () => {
    return (
        <div className='eelised' id='eelised'>
            <div className='container'>
                <h2>Eelised</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={telefonist} alt='telefonist'/>
                        <p>Täidetav nii kodulehel kui ka appis. Raamat pole kunagi liiga kaugel</p>
                        <p><span></span></p>
                        <p></p>
                    </div>
                    <div className='card'>
                        <img src={lihtne} alt='lihne'/>
                        <p>Täitmine on lihtne. Vanemale on abiks vihjed ja näidised.</p>
                        <p><span></span></p>
                        <p></p>
                    </div>
                    <div className='card'>
                        <img src={galerii} alt='galerii'/>
                        <p>Pildid saab lisada otse arvuti või telefoni galeriist.</p>
                        <p><span></span></p>
                        <p></p>
                    </div>
                    <div className='card'>
                        <img src={alarm} alt='galerii'/>
                        <p>Veebirakendus saadab meeldetuletusi, kui laps on saanud 1,2,3....kuuseks, kui on aega hammaste tulekuks, rooma hakkamisesk jne. Lisaks ka siis kui täitmisest on jäänud pikk paus.</p>
                        <p><span></span></p>
                        <p></p>
                    </div>
                    <div className='card'>
                        <img src={raamat} alt='galerii'/>
                        <p>Lõpp tulemuseks on kaunis sinu enda valitud värvi, suuruse ja kujundusega trükitud raamat. </p>
                        <p><span></span></p>
                        <p></p>
                    </div>
                    <div className='card'>
                        <img src={pere} alt='galerii'/>
                        <p>Enam ei ole küsimust, et kellel jääb raamat. Kõik saavad oma raamatu. Raamatuid saab lasta trükkida nii palju kui süda soovib.</p>
                        <p><span></span></p>
                        <p></p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Eelised
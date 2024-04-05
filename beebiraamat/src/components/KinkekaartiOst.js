import React from 'react'
import kinkekaart from './images/kinkekaart.png'

import './KinkekaartiOst.css'

const KinkekaartiOst = () => {
  return (
      <div className='kinkekaart' id='kinkekaart'>
      <div className='container'>
          <h2>Eelised</h2>
          <span className='line'></span>
          <div className='content'>
              <div className='card'>
                  <img src={kinkekaart} alt='kinkekaart'/>
                  <p>Osta kinkekaart</p>
                  <p><span>69,99€</span></p>
                  <p>Tulevased vanemad saavad endale tellida tasuta, ühe füüsilisel kujul raamatu ja raamatu pdf kujul tasuta alla laadida.</p>
              </div>
          </div>
      </div>
      </div>
  )
}

export default KinkekaartiOst
import React from 'react'
import kinkekaart from './images/kinkekaart.png'

import './KinkekaartiOst.css'

const KinkekaartiOst = () => {
  return (
      <div className='kinkekaartiOst' id='kinkekaartiOst'>
      <div className='container'>
          <h2>Osta kinkekaart</h2>
    
          <div className='content'>
              <div className='card'>
                  <img src={kinkekaart} alt='kinkekaart'/>
                  <p>Hind:</p>
                  <p><span>69,99€</span></p>
                  <p>Kingi mälestusi, kingi vanematele võimalust kikekaarti täita lihtsalt ja mugavalt!</p>
                  <button className='button'>Osta</button>
              </div>
          </div>
      </div>
      </div>
  )
}

export default KinkekaartiOst
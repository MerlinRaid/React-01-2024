import React from 'react'
import Demo from './Demo';
import Kinkekaart from './Kinkekaart';
import Tutvustus from './Tutvustus';
import Esikuva from './Esikuva';
import Eelised from './Eelised';

function Homepage() {
  return (
    <div>
      <Esikuva />
      <Tutvustus />
      <Eelised />
      <Demo />
      <Kinkekaart />

    </div>
  )
}

export default Homepage
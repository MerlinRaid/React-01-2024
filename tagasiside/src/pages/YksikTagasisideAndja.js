import React from 'react'
import nimedFailist from "../nimed.json"
import { useParams } from 'react-router-dom'

function YksikTagasisideAndja() {
    const { index }= useParams();
    const leitud = nimedFailist[index];

  return (
    <div>
       <div>Nimi: {leitud} </div> 
       <div>Järjekorranumber: {index}</div>
    </div>
  )
}

export default YksikTagasisideAndja
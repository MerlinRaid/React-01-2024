import React from 'react'
import tootedFailist from "../data/tooted.json";
import { useParams } from 'react-router-dom';

function YksToode() {
  const{ index } = useParams()
  const leitud = tootedFailist[index];

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }


  return (
    <div>
      <h2>{leitud}</h2> 
      <hr /> 
      <span>1,5€</span>
    </div>
  )
}

export default YksToode
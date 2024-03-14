import React from 'react'
import tootedFailist from "../data/tooted.json";
import { useParams } from 'react-router-dom';

function YksToode() {
  const{ index } = useParams();
  const leitud = tootedFailist[index];

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }


  return (
    <div>
      <h2>{leitud.nimi}</h2> 
      <hr /> 
      <div>{leitud.hind} €</div>
      <img src={leitud.pilt} alt="" />
    </div>
  )
}

export default YksToode
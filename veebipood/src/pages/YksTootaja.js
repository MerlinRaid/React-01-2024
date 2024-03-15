import React from 'react'
import tootajadFailist from "../data/tootajad.json";
import { useParams } from 'react-router-dom';

function YksTootaja() {
  const { index } = useParams();
  const tootaja = tootajadFailist[index];

  if (tootaja === undefined) {
    return <div>töötajat ei leitud</div>
  }

  return (
    <div>
      <h3>{tootaja.nimi}</h3>
      <div>{tootaja.amet}</div>
      <div>{tootaja.email}</div>
      <div>{tootaja.vanus}</div>

    </div>
  )
}

export default YksTootaja
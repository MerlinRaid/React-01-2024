import React, { useRef }  from 'react'
import hinnadFailist from "../data/hinnad.json";
import { useParams } from 'react-router-dom';

function MuudaHind() {
  //<Route path="/muuda-hind/:index" - sp läheb siia  index
  const { index } = useParams();
  const hind = hinnadFailist[index];
  const hindRef = useRef();

  if( hind === undefined) {
    return <div>Hinda ei leitud</div>
  }


  const muuda = () => {
    hinnadFailist[index] = Number(hindRef.current.value);
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input ref={hindRef} defaultValue={hind} type="text" /> <br />
      <button onClick={muuda} >Muuda hind</button> <br />
    </div>
  )
}

export default MuudaHind
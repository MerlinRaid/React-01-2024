import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 
import joogidFailist from "../joogid.json";

function Avaleht() {
  const [ joogid ] = useState(joogidFailist);
  return (
    <div>
      {joogid.map((jook, index) => 
        <div>
           <Link to={"/Jook/" + index}>
            <button>{jook}</button>
          </Link>
        </div> )}
      

    </div>
  )
}

export default Avaleht
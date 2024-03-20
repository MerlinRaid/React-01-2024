import React from 'react'
import { useParams } from 'react-router-dom'

function YksUudis() {
    const {index} = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised") || []) 
    const found = uudisedLS[index];

    if (found === undefined) {
        return <div>Uudist ei leitud</div>
      }

  return (
    <div>
        {found}
    </div>
  )
}

export default YksUudis
import React, { useRef, useState } from 'react'


function Logimiseks() {
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();
  const [paroolKorrektne, setParoolKorrektne] = useState(true)


  const kontolliParool = () => {
    if (paroolRef.current.value.length < 8 ||
       paroolRef.current.value.toLowerCase() === paroolRef.current.value||
       paroolRef.current.value.toUpperCase() === paroolRef.current.value||
       paroolRef.current.value.includes("%") === false) {
        setParoolKorrektne(false);
       }else {
        setParoolKorrektne(true);
       }   
  }

// on sama nagu ülemine
//   const kontolliParool = () => {
//     if (paroolRef.current.value.length >= 8 &&
//        paroolRef.current.value.toLowerCase() !== paroolRef.current.value&&
//        paroolRef.current.value.toUpperCase() !== paroolRef.current.value&&
//        paroolRef.current.value.includes("%") === true) {
//         setParoolKorrektne(true)
//        }else {
//         setParoolKorrektne(false)
//        }
       
//   }

  return (
    <div>
         
      <label>Kasutajanimi</label> <br />
      <input type="text" ref={kasutajaNimiRef} /> <br />
      <label>Parool</label> <br />
      <input onChange={kontolliParool} type="password" ref={paroolRef} /> <br />
      <button>Logi sisse</button>
      {paroolKorrektne === false && <div>Parool pole korrektne</div>}
      
    </div>
  )
}

export default Logimiseks
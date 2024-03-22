import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react' ;

function KasutajaPostitused() {
    const{ kasutajaId } = useParams();
    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => {
         const result= data.filter(element => element.userId === Number(kasutajaId));
         uuendaPostitused(result)
        })
     }, [kasutajaId]);


  return (
    <div>
        {postitused.map((element, index) => <div> 
            <div><i>{element.userId}</i></div>
            <div><u>{element.id}</u></div>
            <div><b>{element.title}</b></div>
            <div>{element.body}</div> 
        </div>  )}


    </div>
  )
}

export default KasutajaPostitused
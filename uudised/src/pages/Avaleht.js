import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';


function Avaleht() {
    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => uuendaPostitused(data))
    }, []);

    return ( 
    <div>
        {postitused.map(element => <div> 
            <div><i>{element.userId}</i></div>
            <div><u>{element.id}</u></div>
            <div><b>{element.title}</b></div>
            <div>{element.body}</div> 
            <Link to={"/kasutaja-postitused/" + element.userId}>
            <button>Kõik kasutaja postitused</button>
            </Link>
            
        </div>  )}
        


        <div>See on avaleht, nähtav aadressil localhost:3000 aadressil</div>
        <img src="https://cdn5.vectorstock.com/i/1000x1000/37/34/home-sign-icon-main-page-button-navigation-vector-2873734.jpg" className="pilt" alt="" />
    </div> );
}

export default Avaleht;
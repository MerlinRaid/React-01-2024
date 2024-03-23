import React, { useEffect, useState } from 'react'

function Tooted() {
    const [products, setProducts]= useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products" )
        .then(response => response.json())
        .then(json => setProducts(json.products))
       }, []);
    
  return (
    <div>
        {products.map(product => <div>
            <div><b>{product.title}, {product.brand}</b></div>
            <div><img src={product.thumbnail} alt="" /></div>
            <div>{product.price}€</div> 
            <div>{product.description}</div>
            <br /><br />
            

            
        </div>)}


    </div>
  )
}

export default Tooted
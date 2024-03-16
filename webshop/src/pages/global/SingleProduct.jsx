import React from 'react'
import { useParams } from 'react-router-dom';
import productsJson from "../../data/products.json"


function SingleProduct() {
  const{ index } = useParams();
  const product = productsJson[index];

  if (product === undefined) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <img style={{width: "100px"}} src={product.image} alt="" />
        <h2>{product.title}</h2>
        <h3>Price: {product.price}€</h3>
        <div>Description: {product.description}</div>
        <br /><br />
        <div>Category: {product.category}</div>
        <div>Rating:</div>
        <div>Rate: {product.rating.rate }</div>
        <div>Count: {product.rating.count }</div>


    </div>
  )
}

export default SingleProduct
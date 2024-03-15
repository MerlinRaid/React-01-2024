import React, { useState } from 'react'
import productsJson from "../../data/products.json"

function Cart() {
  const [cart, updateCart] = useState(productsJson );

  const deleteFromCart =(index) => {
    cart.splice(index, 1);
    updateCart(cart.slice());
   }
   
   const addToCart= (newProduct) => {
     cart.push(newProduct);
     updateCart(cart.slice());
   }
   
   const calculateTotal = () => {
     let amount = 0;
     cart.forEach(product => amount = amount + product.price);
     return amount;
   }

  return (
    <div>
        {cart.length === 0 && <div>The shopping cart is currently empty.</div>}
  

      {cart.length > 0 &&
      <div>
        <div>You have {cart.length} items in your cart</div>
        <button onClick={() => updateCart([])}>Empty the shopping cart</button>
      </div>}

        {cart.map((product, index) => 
          <div key={index}>
            {index}.
            <img style={{width: "50px"}} src={product.image} alt="" />
            {product.title} - {product.price} €
            <button onClick={() => deleteFromCart(index)}>Delate</button> 
            <button onClick={() => addToCart(product)}>Add one to the end</button> 
          </div> )}

          <div>Total amount: {calculateTotal()}€</div>
    </div>
  )
}

export default Cart
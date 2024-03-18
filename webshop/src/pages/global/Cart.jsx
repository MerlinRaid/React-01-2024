import React, { useEffect, useState } from 'react'
//import cartFromFile from "../../data/cart.json"

function Cart() {                 // 1 ja 2 samm (homapge lehel sammud)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
     .then(res => res.json())
     .then(body => setParcelMachines(body))
  }, []);

  const deleteFromCart =(index) => {
    cart.splice(index, 1); // 3.samm
    setCart(cart.slice()); // uuendab HTML'i
    localStorage.setItem("cart", JSON.stringify(cart)); //salvestab localSToragesse ehk 4 ja 5 samm
  }

    const decraseQuantity = (index) =>{
      cart[index].kogus = cart[index].kogus - 1;
      if(cart[index].kogus === 0){
        cart.splice(index, 1); // 3.samm
        localStorage.setItem("cart", JSON.stringify(cart)); // 4 ja 5 samm
      }
      setCart(cart.slice());
      localStorage.setItem("cart", JSON.stringify(cart)); // 4 ja 5 samm
    }

    const incraseQuantity = (index) =>{
      cart[index].kogus = cart[index].kogus + 1; // 3 samm
      setCart(cart.slice());
      localStorage.setItem("cart", JSON.stringify(cart)); // 4 ja 5 samm
    }
   
   
  //  const addToCart= (newProduct) => {
  //    cart.push(newProduct);
  //    updateCart(cart.slice());
  //  }
   
   const calculateTotal = () => {
     let amount = 0;
     cart.forEach(product => amount = amount + product.toode.price * product.kogus);
     return amount;
   }

  return (
    <div>
        {cart.length === 0 && <div>The shopping cart is currently empty.</div>}
  

      {cart.length > 0 &&
      <div>
        <div>You have {cart.length} items in your cart</div>
        <button onClick={() => setCart([])}>Empty the shopping cart</button>
      </div>}

        {cart.map((product, index) => 
          <div key={index}>
            {index + 1}.
            <img style={{width: "50px"}} src={product.toode.image} alt="" />
            {product.toode.title} - {product.toode.price} €
            <button onClick={() => decraseQuantity(index)} >-</button>
            <div>{product.kogus} tk</div>
            <div>{product.toode.price * product.kogus} €</div>
            <button onClick={() => incraseQuantity(index)} >+</button>
            {/* kuva KODUS rating välja
              pange koguse kõrvale toodete keskmine rating:
              reitingu kogusumma jagatud koguarv
              ärge arvestage koguseid. pluus 6tk, kell 3 tk- arvestat ikka nagu 1 pluus, 1 kell
              vihje nagu hinna arvutus
            */}
            <button onClick={() => deleteFromCart(index)}>Delate</button> 
            {/* <button onClick={() => addToCart(product)}>Add one to the end</button>  */}
          </div> )}

          <h3>Total amount: {calculateTotal()}€</h3>

          <select>
            {parcelMachines.map(pm=> <option>{pm.NAME}</option>)}
          </select>
    </div>
  )
}

export default Cart
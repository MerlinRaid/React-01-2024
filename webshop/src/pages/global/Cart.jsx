import React, { useEffect, useState } from 'react'
//import cartFromFile from "../../data/cart.json"
import "../../css/Cart.css";

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
     return amount.toFixed(2);
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
          <div className='product' key={index}>
           <div className='number'>{index + 1}.</div>
            <img className='image' style={{width: "50px"}} src={product.toode.image} alt="" />
            <div className='title'>{product.toode.title}</div>  
            <div className='price'>{product.toode.price.toFixed(2)} € </div>
           <div className='quantity'> 
              <img className='button' onClick={() => decraseQuantity(index)} src="/minus.png" alt="" />
              <div >{product.kogus} tk</div>
              <img className='button' onClick={() => incraseQuantity(index)} src="/plus.png" alt="" />
            </div>
            <div className='total'>{(product.toode.price * product.kogus).toFixed(2)} €</div>
            <img className='button' onClick={() => deleteFromCart(index)} src="/remove.png" alt="" />
            {/* <button onClick={() => addToCart(product)}>Add one to the end</button>  */}
          </div> )}
          {cart.length > 0 && 
            <React.Fragment>
            <h3>Total amount: {calculateTotal()}€</h3>
            <select>
              {parcelMachines
                .filter(pm=> pm.A0_NAME === "EE")
                .map(pm=> <option>{pm.NAME}</option>)}
            </select>
          </React.Fragment>}
    </div>
  )
}

export default Cart

    /* 
    kuva KODUS rating välja
    pange koguse kõrvale toodete keskmine rating:
    reitingu kogusumma jagatud koguarv
    ärge arvestage koguseid. pluus 6tk, kell 3 tk- arvestat ikka nagu 1 pluus, 1 kell
   vihje nagu hinna arvutus
            */
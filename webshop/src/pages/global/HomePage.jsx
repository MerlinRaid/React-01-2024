import React, { useState } from 'react'
import productsJson from "../../data/products.json"
import {Link} from 'react-router-dom'
//import cartFromFile from "../../data/cart.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
  const [ products, setProducts] = useState(productsJson)
  

  const sortAZ = () => {
    products.sort((a,b) => a.title.localeCompare(b.title))
    setProducts(products.slice());
  }
  
  const sortZA= () => {
    products.sort((a,b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  const sortPriceAscending = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }
  const sortPriceDescending= () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  const SortByRating= () => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }

  const filterElectronics =() => {
    const find = products.filter(product => product.category === "electronics");
    setProducts(find);
  }

  const filterJewelery =() => {
    const find = products.filter(product => product.category === "jewelery");
    setProducts(find);
  }

  const filterMenClothing =() => {
    const find = products.filter(product => product.category === "men's clothing");
    setProducts(find);
  }

  const filterWomenClothing =() => {
    const find = products.filter(product => product.category === "women's clothing");
    setProducts(find);
  }

  const original = () => {
    setProducts(productsJson)
  }
  
  


  const addCart = (product) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(cp =>  cp.toode.id === product.id);
    if (index >= 0 ) { 
      toast.success(`${product.title} added to cart`);
      // !== -1 kui ei leitud array seest, siis index on -1
       //kinkekaartidel: kogus = kogus +1
       cartLS[index].kogus = cartLS[index].kogus + 1
        // cartFromFile[index].kogus += 1; iseendale liidetakse 1
        // cartFromFile[index].kogus++; kasutatakse tsüklites    
    } else {      
      cartLS.push({"kogus": 1, "toode": product}); 
    } 
    localStorage.setItem("cart", JSON.stringify(cartLS));
    

   


    // parem klõps -> inspect -> application
      // Array localStorage-sse salvestamiseks:
      // 1. Võtta localStorage-st: localStorage.getItem()    et saada kätte vana seis
      // 2. Võtta jutumärgid maha: JSON.parse()       localStorage annab jutumärkides, aga 
      //      meie tahame .findIndex() ja .push() teha - seda saab teha array'del
      // 3. Muudame/ lisame array'le: .push()    
      // 4. Lisame jutumärgid tagasi: JSON.stringify()
      // 5. Lisame localStorage-sse tagasi:   localStorage.setItem()   et uueneks brauseris
  }
  return (
    <div>
      <br /><br />
      <button onClick={sortAZ} >Sorting A-Z</button>
      <button onClick={sortZA}>Sorting Z-A</button>
      <button onClick={sortPriceAscending }>Sort price in ascending order</button>
      <button onClick={sortPriceDescending}>Sort price in descending order</button>
      <button onClick={SortByRating}>Sort by rating from highest to lowest</button>
      <br /><br />
      <button onClick={filterElectronics}>Filter electronics</button>
      <button onClick={filterJewelery}>Filter jewelery</button>
      <button onClick={filterMenClothing}>Filter men's clothing</button>
      <button onClick={filterWomenClothing}>Filter women's clothing</button>
      <br /><br />
      <button onClick={original}>Restore original</button>



      {products.map((product, index) => 
      <div key={product.id}>
        <img style={{width: "100px"}} src={product.image} alt="" />
        <div>{product.title}</div>
        <div>{product.price}€</div>

        <Link to={"/product/" + index}>
          <button>Look closer</button>
        </Link>

        <button onClick={() => addCart(product)}>Add to cart</button>
      </div>
        )}

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark" 
        />
    </div>
  )
}

export default HomePage
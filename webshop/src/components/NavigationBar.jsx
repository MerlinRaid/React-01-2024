import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div>
      <Link to="/">
        <button>Home Page</button>
      </Link>

      <Link to="cart">
        <button>Cart</button>
      </Link>

      <Link to="contact">
        <button>Contact Us</button>
      </Link>

      <Link to="shops">
        <button>Shops</button>
      </Link>

      <Link to="login">
        <button>Login</button>
      </Link>

      <Link to="signup">
        <button>Sign up</button>
      </Link>


    </div>
  )
}

export default NavigationBar
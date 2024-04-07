import { Link } from "react-router-dom"
import "./Register.css"

export default function Register() {
  return (
    <div className="register">
       <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label>Kasutaja</label>
            <input type="text" className="registerInput" placeholder="Enter your username.." />
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email.." />
            <label>Parool</label>
            <input type="password"  className="registerInput" placeholder="Enter your password.." />
            <button className="registerButton">Registeeri</button>
        </form>
        <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}

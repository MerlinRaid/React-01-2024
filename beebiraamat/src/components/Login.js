import { Link } from "react-router-dom"
import "./Login.css"

export default function Login() {
  return (
    <div className="login" id="login">
       <span className="loginTitle">Logi sisse</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter your email.." />
            <label>Parool</label>
            <input type="password"  className="loginInput" placeholder="Enter your password.." />
            <button className="loginButton">Logi sisse</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Registeeri</Link>
        </button>
    </div>
  )
}
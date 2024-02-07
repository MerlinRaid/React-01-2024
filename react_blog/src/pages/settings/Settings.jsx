import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img className="settingsPPImg" src="https://cdn.pixabay.com/photo/2023/10/12/12/55/woman-8310751_1280.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}   
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }}/>
            </div>
            <label>Username</label>
            <input  type="text" placeholder="Merlin"/>
            <label>Email</label>
            <input type="email" placeholder="merlin@gmail.com"/>
            <label>Password</label>
            <input type="password" />
            <button className="settingsSumbmit">Update</button>
        </form>
        </div>
        <Sidebar />
    </div>
  )
}

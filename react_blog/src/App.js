import Homepage from "./pages/home/Homepage";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="/posts" element={<Homepage />}></Route>
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />}></Route>
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />}></Route>
        <Route path="/post/: id" element={<Single />}></Route>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}></Route>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}></Route>
      </Routes>
    </Router>
    )
  }
    
  export default App;
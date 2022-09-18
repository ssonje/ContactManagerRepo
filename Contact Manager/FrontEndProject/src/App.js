import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import { ToastContainer } from 'react-toastify';
import About from './Components/UI Components/About/About';
import BaseAppCss from "./CSS/BaseApp.module.css";
import Home from './Components/UI Components/Home/Home';
import Login from './Components/UI Components/Login/Login';
import Logout from './Components/UI Components/Logout/Logout';
import Signup from './Components/UI Components/Signup/Signup';
import UserProfile from './Components/UI Components/User/UserProfile';

function App() {
  return (
    <div className={(BaseAppCss.AppWindow) + " " + (BaseAppCss.BackgroundImage)}>
      <Router>
        <ToastContainer autoClose={2000} />
        <Container fluid={true} className="p-0">
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/home" element={<Home />} exact></Route>
            <Route path="/about" element={<About />} exact></Route>
            <Route path="/login" element={<Login />} exact></Route>
            <Route path="/signup" element={<Signup />} exact></Route>
            <Route path="/user/profile" element={<UserProfile />} exact></Route>
            <Route path="/logout" element={<Logout />} exact></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;

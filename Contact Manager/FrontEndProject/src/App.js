import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import { ToastContainer } from 'react-toastify';

import About from './Components/UI Components/About/About';
import AddContact from './Components/UI Components/Add Contact/AddContact';
import BaseAppCss from "./CSS/BaseApp.module.css";
import DeleteContact from './Components/UI Components/Delete Contact/DeleteContact';
import ForgotPassword from './Components/UI Components/Forgot Password/ForgotPassword';
import ForgotPasswordOTPAuth from './Components/UI Components/Forgot Password/OTP Authentication/ForgotPasswordOTPAuth';
import ForgotPasswordUpdatePassword from './Components/UI Components/Forgot Password/Update Password/ForgotPasswordUpdatePassword';
import Home from './Components/UI Components/Home/Home';
import Login from './Components/UI Components/Login/Login';
import Logout from './Components/UI Components/Logout/Logout';
import ModifyContact from './Components/UI Components/Modify Contact/ModifyContact';
import Settings from './Components/UI Components/Settings/Settings';
import Signup from './Components/UI Components/Signup/Signup';
import UserProfile from './Components/UI Components/UserProfile/UserProfile';
import ViewContacts from './Components/UI Components/View Contacts/ViewContacts';
import ViewSingleContact from './Components/UI Components/View Single Contact/ViewSingleContact';

function App() {
  return (
    <div className={(BaseAppCss.AppWindow) + " " + (BaseAppCss.BackgroundImage)}>
      <Router>
        <ToastContainer autoClose={2000} />
        <Container fluid={true} className="p-0">
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/about" element={<About />} exact></Route>
            <Route path="/forgot/password/email" element={<ForgotPassword />} exact></Route>
            <Route path="/forgot/password/otp/auth" element={<ForgotPasswordOTPAuth />} exact></Route>
            <Route path="/forgot/password/update/password" element={<ForgotPasswordUpdatePassword />} exact></Route>
            <Route path="/home" element={<Home />} exact></Route>
            <Route path="/login" element={<Login />} exact></Route>
            <Route path="/logout" element={<Logout />} exact></Route>
            <Route path="/signup" element={<Signup />} exact></Route>
            <Route path="/user/add/contact" element={<AddContact />} exact></Route>
            <Route path="/user/delete/contact/:id" element={<DeleteContact />} exact></Route>
            <Route path="/user/modify/contact/:id" element={<ModifyContact />} exact></Route>
            <Route path="/user/view/contacts" element={<ViewContacts />} exact></Route>
            <Route path="/user/view/contact/:id" element={<ViewSingleContact />}></Route>
            <Route path="/user/profile" element={<UserProfile />} exact></Route>
            <Route path="/user/settings" element={<Settings />} exact></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;

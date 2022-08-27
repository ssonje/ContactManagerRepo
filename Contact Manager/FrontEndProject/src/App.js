import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Login from './Components/Home/Login';
import Signup from './Components/Home/Signup';

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path="/home" element={<Home/>} exact></Route>
            <Route path="/about" element={<About/>} exact></Route>
            <Route path="/login" element={<Login/>} exact></Route>
            <Route path="/signup" element={<Signup/>} exact></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;

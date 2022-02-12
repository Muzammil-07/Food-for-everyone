import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Crousal from './components/Crousal';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="/" element={<Login/>} />
     
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;

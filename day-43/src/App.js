
import './App.css';

import { Routes, Route, Link } from "react-router-dom"
import About from "./components/About"
import Feedbackfrom from './components/FeedbackFrom';
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"

import Usukhuu from './components/about/Usukhuu';
import Khangai from './components/about/Khangai';
import NotFound from './components/about/NotFound';




function App() {

  return (
    <div className="App">
      <h1>Day-43 - React Routes</h1>
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/feedbackform"}>feedback</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/register"}>register</Link>
      </div>
   
      <Routes>


        <Route path="/feedbackform" element={<Feedbackfrom />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about/*" element={<About />}>

          <Route path="usukhuu" element={<Usukhuu />} />
          <Route path="khangai" element={<Khangai />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>


    </div>
  )
}

export default App;

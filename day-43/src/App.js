import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import FeedbackFrom from './components/FeedbackFrom';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Feedbackfrom from './components/FeedbackFrom';
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Test from "./components/Test"
import Usukhuu from './components/about/Usukhuu';
import Khangai from './components/about/Khangai';
import NotFound from './components/about/NotFound';




function App() {

  return (
    <div className="App">
      <h1>Day-43 - React Routes</h1>
      <div id="navbar">
        <a href="/">Home</a>
        <a href="/about">about</a>
        <a href="/feedbackform">feedback</a>
        <a href="/login">login</a>
        <a href="/register">register</a>
      </div>
      <Routes>

      </Routes>
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

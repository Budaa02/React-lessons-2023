import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Panel from './components/Panel';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from "./components/Home"
import Register from './components/Register';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
       
        {/* <Route path={"/"} element={<Panel/>}/> */}
        <Route path={"/login"} element={ <Login />}/>
        <Route path={"/"} element={ <Home />}/>
        <Route path={"/accordion"} element={ <Accordion />}/>
        <Route path={"/register"} element={ <Register />}/>
      </Routes>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Panel from './components/Panel';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">


      <Routes>
       
        {/* <Route path={"/"} element={<Panel/>}/> */}
        <Route path={"/accordion"} element={ <Accordion />}/>
      </Routes>

    </div>
  );
}

export default App;

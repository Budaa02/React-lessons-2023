import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"
import { useState } from 'react';
import Counter from "./components/Counter"
import UpdateArrays from './components/UpdateArrays';
import Apps from "./components/SpreadArray"
import UpdateObject from "./components/UpdatingObjiect"

function App() {
  const [counter, setCounter] = useState(0)
  const [inputText, setInputText] = useState(0)

  const handleClick = () => { 
    console.log("counter handler clicked");
    setCounter(counter + 1)
  }

  const handleInput = function(event) {
    // console.log(event.target.value);
    console.log("handle input clicked");
    // setInputText(event.target.value)
  }

  return (
    <div className="App">
      <h1>Day-41 - React States</h1>
      <Apps/>
      <UpdateObject/>

      <UpdateArrays/>
      <Counter/>
      <div id="ex1">
        <p>{counter}</p>
        <button onClick={handleClick}>Click</button>
      </div>
      {/* <div id="ex2">
        <p>{inputText}</p>
        <input value={inputText} onChange={(e) => {handleInput(e)}}>Click</input>
      </div> */}
    </div>
  );
}

export default App;

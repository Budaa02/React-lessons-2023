import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import Anime from "./components/Anime";
import Button from "./components/Button";
import TopAnime from "./components/TopAnime";
import Exercises from "./components/Exercises";
import FindEvenOdd from "./components/Ex-Find-Even";

function App() {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <h1>Day-48</h1>
      {/* <Input />
  <Input /> */}
      {/* bagsh hiisen
       */}
      {/* <Input
        label="first input"
        value={text}
        onChange={handleChange}
      />
      <Input
        label="first input"
        value={text}
        onChange={handleChange}
      />
      <Anime />
      <Button />
      <TopAnime /> */}
      <Exercises />
      <FindEvenOdd />
    </div>
  );
}

export default App;

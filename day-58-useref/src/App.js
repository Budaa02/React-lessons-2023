import "./App.css";
import { useContext, useState } from "react";
import List from "./components/List";
import { ImageContext } from "./contexts/ImageContext";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);
  return (
    <div className="App">
      <h1>Day-58 - useRef Hook</h1>
      <Stopwatch />
      {/* <label>
        <input
          type="checkbox"
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use Large Images
      </label>
      <hr />
      <List /> */}
    </div>
  );
}

export default App;

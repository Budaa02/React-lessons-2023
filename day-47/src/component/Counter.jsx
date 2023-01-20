import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [hover, setHover] = useState(0);

  let className = "counter";

  function AddOne() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={AddOne}>add one</button>
    </div>
  );
}

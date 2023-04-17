import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function Add() {
    setResult(Number(num1) + Number(num2));
  }
  function Subtract() {
    setResult(num1 - num2);
  }
  function multiply() {
    setResult(num1 * num2);
  }
  function divide() {
    setResult(num1 / num2);
  }

  return (
    <div className="container">
      <p
        data-testid="result"
        className="result"
      >
        {result}
      </p>
      <input
        data-testid="num1"
        className="input"
        type="number"
        value={num1}
        onChange={(e: any) => setNum1(e.target.value)}
      />
      <input
        data-testid="num2"
        className="input"
        type="number"
        value={num2}
        onChange={(e: any) => {
          setNum2(e.target.value);
        }}
      />

      <button
        data-testid="add"
        className="button"
        onClick={Add}
      >
        Add
      </button>
      <button
        data-testid="subtract"
        className="button"
        onClick={Subtract}
      >
        subtract
      </button>
      <button
        data-testid="multiply"
        className="button"
        onClick={multiply}
      >
        multiply
      </button>
      <button
        data-testid="divide"
        className="button"
        onClick={divide}
      >
        divide
      </button>
    </div>
  );
}

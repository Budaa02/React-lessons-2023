import { useRef, useState } from "react";

export default function Stopwatch() {
  const [now, setNow] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const timeRef = useRef(0);
  const handleStart = () => {
    setStartTime(Date.now());

    timeRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  };
  const handleStop = () => {
    clearInterval(timeRef.current);
  };
  const timer = now - startTime < 0 ? 0 : Math.floor((now - startTime) / 1000);
  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => handleStart()}>start</button>
      <button onClick={() => handleStop()}>stop</button>
    </div>
  );
}
